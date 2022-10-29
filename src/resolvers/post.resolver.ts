import { Post } from 'entities/post.entity';
import { Updoot } from 'entities/updoot.entity';
import { IDataSource } from 'index';
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';
import { isAuth } from '../middleware/isAuth';
@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg('postId', () => Int) postId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext,
  ) {
    const isUpdoot = value !== -1;
    const realvalue: number = isUpdoot ? 1 : -1;

    // current user
    const { userId } = req.session;

    const updoot = await Updoot.findOne({ where: { postId, userId } });

    // the user has voted on the posts before
    // and are changing their vote
    if (updoot && updoot.value !== realvalue) {
      // never voted before
      await IDataSource.transaction(async (tm) => {
        await tm.query(
          `
        update updoot
        set value = $1
        where "postId" = $2 and "userId" = $3
        `,
          [realvalue, postId, userId],
        );

        await tm.query(
          `
        update post
        set points = points + $1
        where id = $2;
        `,
          [2 * realvalue, postId],
        );
      });
    } else if (!updoot) {
      await IDataSource.transaction(async (tm) => {
        await tm.query(
          `
          insert into updoot ("userId", "postId", value)
          values($1, $2, $3)
        `,
          [userId, postId, value],
        );
        await tm.query(
          `
        update post
        set points = points + $1
        where id = $2;
        `,
          [realvalue, postId],
        );
      });
    }

    return true;
  }

  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }
  @Query(() => PaginatedPosts)
  async posts(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext,
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    // const postRepository = IDataSource.getRepository(Post);

    const replacements: any[] = [realLimitPlusOne];

    if (req.session.userId) {
      replacements.push(req.session.userId);
    }

    const time_end = new Date(cursor);

    // for using Between 1970-01-01 And time_end, but not include time_end
    time_end.setMilliseconds(time_end.getMilliseconds() - 1);

    let cursorIndex = 3;

    if (cursor) {
      cursorIndex = replacements.length;
      replacements.push(time_end);
    }

    const posts = await IDataSource.query(
      `select p.*,
       json_build_object(
        'id', u.id,
        'username', u.username,
        'email', u.email
        ) creator,
       ${
         req.session.userId
           ? '(select value from updoot where "userId" = $2 and "postId" = p.id) "voteStatus"'
           : 'null as "voteStatus"'
       }
       from post p
       inner join public.user u on u.id = p."creatorId"
       ${
         cursor
           ? `where p."createdAt" between '1970-01-01T00:00:02.022Z' and $${cursorIndex}`
           : ''
       }
       order by p."createdAt" DESC
       limit $1`,
      replacements,
    );
    // .then((posts) => {
    //   // console.log(r);
    //   console.log(posts);
    //   console.log('-----------------------------');
    //   console.log('realLimit', realLimit);
    //   const r =
    //   console.log(r);
    //   return r;
    // });
    // const r = {
    //   posts: posts.slice(0, realLimit),
    //   hasMore: posts.length === realLimitPlusOne,
    // };
    // console.log(r);
    console.log('posts', posts);
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };

    // if (cursor) {
    //   const posts: Post[] = await postRepository.find({
    //     where: {
    //       createdAt: LessThan(new Date(cursor)),
    //     },
    //     take: realLimitPlusOne,
    //     order: {
    //       createdAt: 'DESC',
    //     },
    //   });
    //   const r = {
    //     posts: posts.slice(0, realLimit),
    //     hasMore: posts.length === realLimitPlusOne,
    //   };
    //   console.log(r);
    //   return r;
    // } else {
    //   const posts: Post[] = await postRepository.find({
    //     take: realLimitPlusOne,
    //     order: {
    //       createdAt: 'DESC',
    //     },
    //   });
    //   const r = {
    //     posts: posts.slice(0, realLimit),
    //     hasMore: posts.length === realLimitPlusOne,
    //   };
    //   console.log(r);
    //   return r;
    // }
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg('id', () => Int) id: number): Promise<Post | undefined> {
    const r = await IDataSource.getRepository(Post).findOne({
      relations: ['creator'],
      where: { id },
    });
    return r;
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg('input') input: PostInput,
    @Ctx() { req }: MyContext,
  ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg('id') id: number,
    @Arg('title', () => String, { nullable: true }) title: string,
  ): Promise<Post | null> {
    const post = await Post.findOneBy({ id: id });
    if (!post) {
      return null;
    }
    if (typeof title !== 'undefined') {
      await Post.update({ id }, { title });
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: number): Promise<boolean> {
    await Post.delete(id);
    return true;
  }
}

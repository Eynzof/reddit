import { Post } from 'entities/post.entity';
import { DataSource } from 'index';
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
import { LessThan } from 'typeorm';
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
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }
  @Query(() => PaginatedPosts)
  async posts(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const postRepository = DataSource.getRepository(Post);
    if (cursor) {
      const posts: Post[] = await postRepository.find({
        where: {
          createdAt: LessThan(new Date(cursor)),
        },
        take: realLimitPlusOne,
        order: {
          createdAt: 'DESC',
        },
      });
      return {
        posts: posts.slice(0, realLimit),
        hasMore: posts.length === realLimitPlusOne,
      };
    } else {
      const posts: Post[] = await postRepository.find({
        take: realLimitPlusOne,
        order: {
          createdAt: 'DESC',
        },
      });
      return {
        posts: posts.slice(0, realLimit),
        hasMore: posts.length === realLimitPlusOne,
      };
    }
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id') id: number): Promise<Post | undefined> {
    return Post.findOneBy({ id: id });
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

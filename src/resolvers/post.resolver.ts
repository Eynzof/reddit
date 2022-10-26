import { Post } from 'entities/post.entity';
import { DataSource } from 'index';
import { isAuth } from 'middleware/isAuth';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  Query,
  Resolver,
  InputType,
  UseMiddleware,
} from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}
@Resolver()
export class PostResolver {
  @Query(() => [Post])
  public async posts(
    @Arg('limit') limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
  ): Promise<Post[]> {
    const realLimit = Math.min(limit, 50);

    const qb = await DataSource.getRepository(Post)
      .createQueryBuilder('p')
      .take(realLimit)
      .orderBy('"createdAt"', 'DESC');

    console.log('cursor', cursor);

    const date = new Date(parseInt(cursor));

    console.log('date', date);

    // console.log(typeof cursor);

    if (cursor) {
      qb.where(' "createdAt" >:cursor', { cursor: new Date(parseInt(cursor)) });
    }
    return qb.getMany();
  }
  @Query(() => Post, { nullable: true })
  public async post(@Arg('id') id: number): Promise<Post | undefined> {
    return Post.findOneBy({ id });
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  public async createPost(
    @Arg('input') input: PostInput,
    @Ctx() { req }: MyContext,
  ): Promise<Post> {
    // not logged in
    if (!req.session.userId) {
      throw new Error('not authenticated');
    }
    return Post.create({ ...input, creatorId: req.session.userId }).save();
  }

  @Mutation(() => Post, { nullable: true })
  public async updatePost(
    @Arg('id') id: number,
    @Arg('title', { nullable: true }) title: string,
  ): Promise<Post | null> {
    const post = await Post.findOneBy({ id });
    if (!post) {
      return null;
    }
    if (typeof post.title !== 'undefined') {
      post.title = title;
      await Post.update({ id }, { title });
    }
    return post;
  }

  @Mutation(() => Boolean)
  public async deletePost(@Arg('id') id: number): Promise<boolean> {
    await Post.delete({ id });
    return true;
  }
}

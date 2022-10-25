import { Post } from 'entities/post.entity';
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
  public async posts(): Promise<Post[]> {
    return Post.find();
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

import { Post } from 'entities/post.entity';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';

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
  public async createPost(@Arg('title') title: string): Promise<Post> {
    return Post.create({ title }).save();
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

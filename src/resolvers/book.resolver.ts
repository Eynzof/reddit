import BookValidator from 'contracts/validators/Book.validator';
import { Author } from 'entities/author.entity';
import { Book } from 'entities/book.entity';
import { Publisher } from 'entities/publisher.entity';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';

@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book])
  public async getBooks(@Ctx() ctx: MyContext): Promise<Book[]> {
    return ctx.em.getRepository(Book).findAll();
  }

  @Query(() => Book, { nullable: true })
  public async getBook(
    @Arg('id') id: string,
    @Ctx() ctx: MyContext,
  ): Promise<Book | null> {
    return ctx.em.getRepository(Book).findOne(id);
  }

  @Mutation(() => Book)
  public async addBook(
    @Arg('input') input: BookValidator,
    @Arg('authorId') authorId: string,
    @Arg('publisherId', { nullable: true }) publisherId: string,
    @Ctx() ctx: MyContext,
  ): Promise<Book> {
    const book = new Book(input);
    book.author = await ctx.em.getRepository(Author).findOneOrFail(authorId);

    if (publisherId) {
      book.publisher = await ctx.em
        .getRepository(Publisher)
        .findOneOrFail(publisherId);
    }
    await ctx.em.persistAndFlush(book);
    return book;
  }

  @Mutation(() => Book)
  public async updateBook(
    @Arg('input') input: BookValidator,
    @Arg('id') id: string,
    @Ctx() ctx: MyContext,
  ): Promise<Book> {
    const book = await ctx.em.getRepository(Book).findOneOrFail(id);
    book.assign(input);
    await ctx.em.persistAndFlush(book);
    return book;
  }

  @Mutation(() => Boolean)
  public async deleteBook(
    @Arg('id') id: string,
    @Ctx() ctx: MyContext,
  ): Promise<boolean> {
    const book = await ctx.em.getRepository(Book).findOneOrFail(id);
    await ctx.em.getRepository(Book).remove(book).flush();
    return true;
  }
}

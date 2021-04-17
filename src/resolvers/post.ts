import { MyContext } from 'src/types';
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Post } from '../entities/Post';
import { isAuth } from '../middleware/isAuth';

@InputType()
export class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }

  @Query(() => [Post])
  posts(
    // CURSOR BASED PAGINATION
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<Post[]> {
    //return Post.find();
    let realLimit = Math.min(50, limit);
    let queryBuilder = getConnection()
      .getRepository(Post)
      .createQueryBuilder('p')
      .orderBy('"createdAt"', 'DESC')
      .take(realLimit);

    if (cursor) {
      queryBuilder.where('"createdAt" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }

    return queryBuilder.getMany();
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('_id', () => Int) _id: number): Promise<Post | undefined> {
    return Post.findOne(_id);
  }

  // mutation is for things like updating, inserting, or deleting. Anything that changes the data
  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg('options') options: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      ...options,
      authorId: req.session.userId,
    }).save();
  }

  // find post based on id primary key, edit data
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg('_id', () => Int) _id: number,
    @Arg('title', () => String) title: string
  ): Promise<Post | null> {
    // _id = { where: _id }
    const post = await Post.findOne(_id);
    if (!post) {
      return null;
    } else if (typeof title !== 'undefined') {
      await Post.update({ _id }, { title });
    }
    return post;
  }

  // find a post based on id primary key, delete from table if found, return null if not found
  @Mutation(() => Boolean)
  async deletePost(@Arg('_id', () => Int) _id: number): Promise<boolean> {
    await Post.delete(_id);
    return true;
  }
}

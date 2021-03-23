import { Post } from '../entities/Post';
import { MyContext } from 'src/types';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg('_id', () => Int) _id: number,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    return em.findOne(Post, { _id });
  }

  // mutation is for things like updating, inserting, or deleting. Anything that changes the data
  @Mutation(() => Post)
  async createPost(
    @Arg('title', () => String) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Post> {
    const post = em.create(Post, { title });
    await em.persistAndFlush(post);
    return post;
  }

  // find post based on id primary key, edit data
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg('_id', () => Int) _id: number,
    @Arg('title', () => String) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    const post = await em.findOne(Post, { _id });
    if (!post) {
      return null;
    } else if (typeof title !== 'undefined') {
      post.title = title;
      await em.persistAndFlush(post);
    }
    return post;
  }

  // find a post based on id primary key, delete from table if found, return null if not found
  @Mutation(() => Boolean)
  async deletePost(
    @Arg('_id', () => Int) _id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      // must use the native delete not remove and flush to be able to use conditions
      await em.nativeDelete(Post, { _id });
      return true;
    } catch {
      return false;
    }
  }
}

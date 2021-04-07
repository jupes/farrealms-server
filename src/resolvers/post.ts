import { Post } from '../entities/Post';
import { Arg, Ctx, Field, InputType, Int, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { MyContext } from 'src/types';
import { isAuth } from '../middleware/isAuth';

@InputType()
export class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return Post.find();
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
    @Ctx() { redis, req }: MyContext
    ): Promise<Post> {
    return Post.create({ 
      ...options,
      authorId: req.session.userId
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

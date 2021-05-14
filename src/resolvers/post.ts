import { Upvote } from 'src/entities/Upvote';
import { MyContext } from 'src/types';
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

@ObjectType()
class CursorPagination {
  // Two ways of declaring an array of type Post below
  @Field(() => [Post]) // GraphQL Post Type
  posts: Post[]; // Typescript Post Type
  @Field()
  hasMorePosts: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }

  // tech debt - this should have its own resolver
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth) // this middleware setup verifies a user is logged in
  async vote(
    @Arg('postId', () => Int) postId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    // check if the value is weird or not -1, if so just do a normal upvote
    const isUpvote = value !== -1;
    const change = isUpvote ? 1 : -1;
    // user id from the Upvote entity
    const { userId } = req.session;
    await Upvote.insert({
      userId,
      postId,
      value: change,
    });
    await getConnection().query(`
    update post
    set score = score + $1
    where p.id = $2
    `, [change, postId])
    await Post.update(
      {
        // underscore id prolly
        _id: postId,
      },
      {}
    );
  }

  @Query(() => CursorPagination)
  async posts(
    // CURSOR BASED PAGINATION
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<CursorPagination> {
    //return Post.find();
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const posts = await getConnection().query(
      `
    select p.* 
    from post p
    ${cursor ? `where p."createdAt" < $2` : ''}
    order by p."createdAt" DESC
    limit $1
    `,
      replacements
    );

    return {
      posts: posts.slice(0, realLimit),
      hasMorePosts: posts.length === realLimitPlusOne,
    };
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

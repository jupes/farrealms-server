import { Project } from '../entities/Project';
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

import { isAuth } from '../middleware/isAuth';

@InputType()
export class ProjectInput {
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  currentBid: number;
  @Field({ nullable: true })
  authorId: number;
}

@Resolver(Project)
export class ProjectResolver {
  @Query(() => [Project])
  projects(): Promise<Project[]> {
    return Project.find({});
  }

  //   @Query(() => Post, { nullable: true })
  //   post(@Arg('_id', () => Int) _id: number): Promise<Post | undefined> {
  //     return Post.findOne(_id);
  //   }

  @Mutation(() => Project)
  async createProject(
    @Arg('options') options: ProjectInput,
    @Ctx() {}: MyContext
  ): Promise<Project> {
    return Project.create({
      description: options.description,
      title: options.title,
      currentBid: options.currentBid,
    }).save();
  }

  // find post based on id primary key, edit data
  @Mutation(() => Project, { nullable: true })
  async updateProjectBid(
    @Arg('_id', () => Int) _id: number,
    @Arg('newBid', () => Int) newBid: number,
    @Ctx() { req }: MyContext
  ): Promise<Project | null> {
    // _id = { where: _id }
    //   authorId: req.session.userId,
    const project = await Project.findOne(_id);
    const sensicalBid = Math.min(newBid, project?.currentBid as number);

    if (!project) {
      return null;
    } else if (project.currentBid) {
      await Project.update(
        { _id },
        // req.session.userId
        { authorId: 1, currentBid: sensicalBid }
      );
    }
    return project;
  }

  //   // find a post based on id primary key, delete from table if found, return null if not found
  //   @Mutation(() => Boolean)
  //   async deletePost(@Arg('_id', () => Int) _id: number): Promise<boolean> {
  //     await Post.delete(_id);
  //     return true;
  //   }
}

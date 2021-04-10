import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Field, Int, ObjectType } from 'type-graphql';
import { User } from './User';
  
  // You can stack decorators
  @ObjectType()
  @Entity()
  export class Project extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    _id!: number;
  
    @Field()
    @Column({ unique: true })
    title!: string;
  
    @Field()
    @Column({ unique: true })
    description!: string;
  
    @Field()
    @Column()
    currentBid!: number;

    @Field({nullable: true})
    @Column({nullable: true})
    authorId: number;
  
    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
  
    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
  }
  
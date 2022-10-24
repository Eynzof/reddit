import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
// import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date = new Date();

  @Field()
  @UpdateDateColumn()
  updatedAt: Date = new Date();
}

import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { User } from './user.entity';
import { Post } from './post.entity';
// import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
  @ManyToOne(() => Post, (post) => post.updoots)
  post: Post;

  @Field()
  @Column()
  postId: number;

  @ManyToOne(() => User, (user) => user.updoots)
  user: User;

  @Field()
  @Column()
  userId: number;
}

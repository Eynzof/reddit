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
// import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: string;

  @Field()
  @Column()
  text!: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @Field()
  @Column()
  creatorId: number;
}

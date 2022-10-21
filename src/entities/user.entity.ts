import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
// import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'text', unique: true })
  username!: string;

  @Property({ type: 'text' })
  password!: string;

  @Property({ type: 'text' })
  email!: string;

  @Field()
  @Property({ default: 'NOW()', unique: true })
  createdAt: Date = new Date();

  @Field()
  @Property({ default: 'NOW()', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}

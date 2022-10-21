import { Field, InputType } from 'type-graphql';

@InputType()
export class UsernamepasswordingInput {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
}

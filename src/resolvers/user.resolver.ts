import { User } from 'entities/user.entity';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { MyContext } from 'utils/interfaces/context.interface';

@InputType()
class UsernamepasswordingInput {
  @Field()
  username: string;
  @Field(() => String)
  password: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, res, em }: MyContext) {
    // not logged in
    console.log(
      '----------------------------------------------------------------',
    );
    if (!req.session.userId) {
      console.log('User not logged in');
      console.log(req.session);
      console.log(
        '----------------------------------------------------------------',
      );
      return null;
    }

    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('options', () => UsernamepasswordingInput)
    options: UsernamepasswordingInput,
    @Ctx() { req, res, em }: MyContext,
  ): Promise<UserResponse> {
    if (options.username.length <= 3) {
      return {
        errors: [
          {
            field: 'username',
            message: 'Username must be more than 3 characters',
          },
        ],
      };
    }

    if (options.password.length <= 3) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Password must be more than 3 characters',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });
    em.persist(user);
    try {
      em.flush();
    } catch (error) {
      if (!error) {
        console.log('test');
      }
      if (
        error.code == '23505' ||
        error.detail.includes('UniqueConstraintViolationException')
      ) {
        // duplicate username
        return {
          errors: [
            {
              field: 'username',
              message: 'username duplicate',
            },
          ],
        };
      }
    }
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options', () => UsernamepasswordingInput)
    options: UsernamepasswordingInput,
    @Ctx() { req, res, em }: MyContext,
  ): Promise<UserResponse> {
    {
      console.log(req.sessionID);
      console.log(req.session);
      const user = await em.findOne(User, {
        username: options.username.toLowerCase(),
      });
      if (!user) {
        return {
          errors: [
            {
              field: 'username',
              message: 'User not found',
            },
          ],
        };
      }

      const valid = await argon2.verify(user.password, options.password);
      if (!valid) {
        return {
          errors: [
            {
              field: 'password',
              message: 'Invalid password',
            },
          ],
        };
      }

      console.log(
        '----------------------------------------------------------------',
      );
      console.log('User logged in successfully');

      if (!req.session.userId) {
        req.session.userId = user.id;
      }

      console.log(req.session);
      console.log(
        '----------------------------------------------------------------',
      );
      return {
        user,
      };
    }
  }
}

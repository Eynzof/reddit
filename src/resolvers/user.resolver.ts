import { User } from 'entities/user.entity';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { MyContext } from 'utils/interfaces/context.interface';
import { COOKIE_NAME, FORGOT_PASSWORD_PREFIX } from '../constants';

import { validateRegister } from 'utils/validateRegister';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { sendEmail } from 'utils/sendEmail';
import { v4 } from 'uuid';
import { AppDataSource } from 'index';

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
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, req }: MyContext,
  ): Promise<UserResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'password must be at least 2 characters',
          },
        ],
      };
    }
    const key = FORGOT_PASSWORD_PREFIX + token;

    const userId = await redis.get(key);

    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'token expired',
          },
        ],
      };
    }

    console.log('userId: ' + userId);
    const userIdNum = parseInt(userId);
    let user;
    try {
      user = await User.findOneBy({
        id: userIdNum,
      });
    } catch (error) {
      console.log(error);
    }

    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'user no longer exists',
          },
        ],
      };
    }

    await User.update(
      { id: userIdNum },
      {
        password: await argon2.hash(newPassword),
      },
    );
    // token is disposed
    redis.del(key);
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { redis }: MyContext,
  ) {
    const user = await User.findOneBy({ email });
    if (!user) {
      // the email is not in the db
      return true;
    }

    const token = v4();

    redis.set(
      FORGOT_PASSWORD_PREFIX + token,
      user.id,
      'EX',
      1000 * 60 * 60 * 2,
    );

    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`,
    );

    return true;
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req, res }: MyContext) {
    // not logged in
    if (!req.session.userId) {
      return null;
    }

    return User.findOneBy({ id: parseInt(req.session.id) });
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }
    const hashedPassword = await argon2.hash(options.password);

    console.log('here');
    let user;
    try {
      const r = await AppDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          email: options.email,
          password: hashedPassword,
        })
        .returning('*')
        .execute();
      console.log('--------------------------------');

      console.log(r);
      user = r.raw[0];
    } catch (error) {
      if (!error) {
        console.log('test');
      }
      if (error.code == '23505' || error.detail.includes('duplicate key')) {
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
    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    const user = await User.findOneBy(
      usernameOrEmail.includes('@')
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail },
    );
    if (!user) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: "that username doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      }),
    );
  }
}

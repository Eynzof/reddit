import DataLoader from 'dataloader';
import { User } from 'entities/user.entity';
import { In } from 'typeorm';

// [1, 2, 3, 4]
// [{id:1, username: 'tim'}, ...]
export const createUserLoader = () =>
  new DataLoader<number, User>(async (uids) => {
    const users = await User.findBy({ id: In(uids as number[]) });
    const uidToUser: Record<number, User> = {};
    users.forEach((u) => {
      uidToUser[u.id] = u;
    });

    return uids.map((uid) => uidToUser[uid]);
  });

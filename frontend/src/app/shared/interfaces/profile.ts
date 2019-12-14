import { Gender } from './gender';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  gender: Gender;
  mobile: string;
}

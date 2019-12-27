import { Gender } from './gender';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  fk_genderid: Gender;
  phone: string;
  dob: string;
}


import { Gender } from './gender';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  gender: Gender;
  phone: string;

  constructor(id, user){
    this.pk_profileid=id
    this.user= user
  }
}


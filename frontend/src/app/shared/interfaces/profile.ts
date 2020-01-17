import { Gender } from './gender';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  gender: Gender;
  phone: string;
  fk_genderid:number;
  dob:Date;
  

  constructor(id, user){
    this.pk_profileid=id
    this.user= user
  }
}


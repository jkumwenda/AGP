import { Gender } from './gender';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  gender: Gender;
  mobile: string;

  constructor(id, user){
    this.pk_profileid=id
    this.user= user
  }

  static getProfiles(){

    let profiles:Profile[]=[
      new Profile(1,new User('jones','mang')),
      new Profile(2,new User('chisomo','mang')),
      new Profile(3,new User('umali','leonard')),
      new Profile(4,new User('ping','leonard')),
    ]

    return profiles
  }
}


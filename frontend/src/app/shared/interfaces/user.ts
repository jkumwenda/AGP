export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;

  constructor(fname,lname){
    this.first_name=fname
    this.last_name=lname
  }
}

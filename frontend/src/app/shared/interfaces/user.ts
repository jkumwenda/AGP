export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;

  fullname() {
    return this.first_name + ' ' + this.last_name;
  }
}

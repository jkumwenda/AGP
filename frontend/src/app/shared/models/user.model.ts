export class UserModel {
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;

    constructor(username: string, password: string, firstName: string, lastName: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

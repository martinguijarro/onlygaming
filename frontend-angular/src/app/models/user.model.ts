import { Role } from "./enums";

export class User {
    userId: string;
    name: string;
    username: string;
    password: string;
    email: string;
    tel: string;
    role: Role;

    constructor(userId: string, name: string, username: string, password: string, email: string, tel: string, role: Role) {
        this.userId = userId;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.tel = tel;
        this.role = role;
    }
}

export class UserModel {

}
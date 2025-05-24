import { Role } from "./enums";

export class User {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    tel: string;
    role: Role;

    constructor(id: number, name: string, username: string, password: string, email: string, tel: string, role: Role) {
        this.id = id;
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
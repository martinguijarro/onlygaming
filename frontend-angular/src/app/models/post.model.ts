export class Post {
    id: number;
    text: string;
    date: Date;
    user: number;
    game: number;

    constructor(id: number, text: string, date: Date, user: number, game: number) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.user = user;
        this.game = game;
    }
}

export class PostModel {

}

export class PostDTO {
    id: number;
    text: string;
    date: Date;
    userName: string;
    userUsername: string;
    game: number;

    constructor(id: number, text: string, date: Date, user: number, userName: string, userUsername: string, game: number) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.userName = userName;
        this.userUsername = userUsername;
        this.game = game;
    }
}

export class PostDTOModel {

}
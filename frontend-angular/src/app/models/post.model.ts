export class Post {
    postId: string;
    text: string;
    date: Date;
    userId: string;
    gameId: string;

    constructor(postId: string, text: string, date: Date, userId: string, gameId: string) {
        this.postId = postId;
        this.text = text;
        this.date = date;
        this.userId = userId;
        this.gameId = gameId;
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
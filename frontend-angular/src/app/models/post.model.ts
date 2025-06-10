export class Post {
    postId: string;
    text: string;
    date: Date;
    likes: string[];
    userId: string;
    gameId: string;

    constructor(postId: string, text: string, date: Date, likes: string[], userId: string, gameId: string) {
        this.postId = postId;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.userId = userId;
        this.gameId = gameId;
    }
}

export class PostModel {

}

export class PostDTO {
    postId: string;
    text: string;
    date: Date;
    likes: string[];
    userName: string;
    userUsername: string;
    game: string;

    constructor(postId: string, text: string, date: Date, likes: string[], userName: string, userUsername: string, game: string) {
        this.postId = postId;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.userName = userName;
        this.userUsername = userUsername;
        this.game = game;
    }
}

export class PostDTOModel {

}
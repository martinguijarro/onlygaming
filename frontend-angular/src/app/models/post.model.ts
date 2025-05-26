export class Post {
    id?: string;
    text: string;
    gameId: string;
    userId: string;

    constructor(id: string, text: string, gameId: string, userId: string) {
        this.id = id;
        this.text = text;
        this.gameId = gameId;
        this.userId = userId;
    }
}
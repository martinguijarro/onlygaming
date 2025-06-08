export class Game {
    gameId: string;
    name: string;
    description: string;
    developer: string;
    releaseDate: Date;
    imageUrl: string;

    constructor(gameId: string, name: string, description: string, developer: string, releaseDate: Date, imageUrl: string) {
        this.gameId = gameId;
        this.name = name;
        this.description = description;
        this.developer = developer;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
    }
}

export class GameModel {

}
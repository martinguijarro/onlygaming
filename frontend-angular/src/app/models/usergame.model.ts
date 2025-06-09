import { GameStatus } from "../models/enums";

export class UserGame {
    userGameId: string;
    userId: string;
    gameId: string;
    status: GameStatus;

    constructor(userGameId: string, userId: string, gameId: string, status: GameStatus) {
        this.userGameId = userGameId;
        this.userId = userId;
        this.gameId = gameId;
        this.status = status;
    }
}

export class UserGameModel {
    userId!: string;
    gameId!: string;
    status!: GameStatus;
}
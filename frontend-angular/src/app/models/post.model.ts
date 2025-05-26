export class Post {
    id?: number;
    text: string;
    gameid: string;
    userid: string;

    constructor(id: number, text: string, gameid: string, userid: string) {
        this.id = id;
        this.text = text;
        this.gameid = gameid;
        this.userid = userid;
    }
}
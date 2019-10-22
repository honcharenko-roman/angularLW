export class Article {
    headline: string;
    author: string;
    content: string;
    date: number;

    constructor(headline: string, author: string, content: string, date: number) {
        this.headline = headline;
        this.author = author;
        this.content = content;
        this.date = date;
    }
}

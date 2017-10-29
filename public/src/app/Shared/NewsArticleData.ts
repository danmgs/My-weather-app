
export class NewsArticleData {

    constructor(
        public author: String,
        public title: String,
        public description: String,
        public url: String,
        public urlToImage: String,
        public publishedAt: Date
    ) { }
}
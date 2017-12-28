export class QuoteCompanyNewsData {

    constructor(
        public id: number,
        public symbol: String,
        public title: String,
        public description: String,
        public summary: String,
        public date: Date,
        public link: String
    ) { }
}

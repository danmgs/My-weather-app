export class QuoteData {

  constructor(
    public close: number,
    public date: Date,
    public high: number,
    public low: number,
    public open: number,
    public symbol: String,
    public volume: number
  ) { }
}

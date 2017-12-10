export class WeatherFav {

  createdTime: Date;
  constructor(
    public id: String,
    public address: String,
    public active: boolean
  ) {
    this.createdTime = new Date(parseInt(this.id.substring(0, 8), 16) * 1000);
  }
}

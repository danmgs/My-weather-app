import { GeoData } from '../Shared/GeoData';

export class WeatherData {

  constructor(
    // public summary: String,
    // public temperature: number,
    // public humidity: String,
    // public icon: String
    public geodata: GeoData,
    public temperature: number,
    public icon: String,
    public precipProbability: Number,
    public humidity: Number,
    public windSpeed: Number,
    public cloudCover: Number,
    public dailySummary: String,
  ) { }
}

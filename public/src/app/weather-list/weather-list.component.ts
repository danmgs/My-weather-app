import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';

import { WeatherData } from '../Shared/WeatherData';
import { WeatherFav } from '../Shared/WeatherFav';

import * as _ from "lodash";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  private subscriptionWeather: Subscription;
  private subscriptionAllWeatherFavorites: Subscription;
  weatherResponse: WeatherData;
  show: boolean = false;
  weatherResponseFavorites: WeatherData[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.getWeatherForFavoritesActive();

    this.subscriptionWeather = this.weatherService.weatherChanged
      .subscribe(
      (weatherdata: WeatherData) => {
        this.weatherResponse = weatherdata;
        this.show = true;
      }
      );

    this.subscriptionAllWeatherFavorites = this.weatherService.allWeatherFavoritesChanged
      .subscribe(
      (weatherdatas: WeatherData[]) => {
        this.weatherResponseFavorites = weatherdatas;
      }
      );
  }

  getWeather(address: String) {
    this.show = false;
    this.weatherService.getWeather(address);
  }

  getWeatherForFavoritesActive() {
    this.weatherResponseFavorites = [];
    this.weatherService.getWeatherForFavoritesActive();
  }

  ngOnDestroy() {
    this.subscriptionWeather.unsubscribe();
    this.subscriptionAllWeatherFavorites.unsubscribe();
  }

}

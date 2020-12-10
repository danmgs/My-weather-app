import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../../../services/weather.service';

import { WeatherData } from '../../../Shared/WeatherData';
import { WeatherFav } from '../../../Shared/WeatherFav';
import { GeoData } from '../../../Shared/GeoData';

import * as _ from 'lodash';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnDestroy {

  private subscriptionGetForecast: Subscription;
  private subscriptionGetForecastForFavoritesActive: Subscription;
  weatherResponse: WeatherData;
  show = false;
  elseBlock: any;
  weatherFavoritesResponse: WeatherData[] = [];
  defaultAddress: String = 'Paris';
  defaultLatitude: Number = Number("48.8534");
  defaultLongitude: Number = Number("2.3488");

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.getForecast(this.defaultAddress);
    this.getForecastByGeoCode(this.defaultLatitude, this.defaultLongitude);
    this.getForecastForFavoritesActive();

    this.subscriptionGetForecast = this.weatherService.weatherChanged
      .subscribe(
      (response: WeatherData) => {
        console.log('end getForecast');
        this.weatherResponse = response;
        this.show = true;
      }
      );

    this.subscriptionGetForecastForFavoritesActive = this.weatherService.allForecastForFavoritesChanged
      .subscribe(
      (response: WeatherData[]) => {
        this.weatherFavoritesResponse = response;
      }
      );
  }

  getForecast(address: String) {
    this.show = false;
    console.log('getForecast', address);
    this.weatherService.getForecast(address);
  }

  getForecastByGeoCode(addressLatitude: Number, addressLongitude: Number) {
    this.show = false;
    console.log('getForecastByGeoCode', addressLatitude, addressLongitude);
    this.weatherService.getForecastByGeoCode(new GeoData(addressLatitude, addressLongitude, `City with coordinates (${addressLatitude},${addressLongitude})`));
  }

  getForecastForFavoritesActive() {
    this.weatherFavoritesResponse = [];
    this.weatherService.getForecastForFavoritesActive();
  }

  /// Helper to make weather icons work
  /// better solution is to map icons to an object
  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy';
      case 'rain':
        return 'wi wi-day-rain';
      case 'clear-night':
        return 'wi wi-night-clear';
      default:
        console.log('weatherIcon not managed', icon);
        return `wi wi-day-sunny`;
    }
  }

  ngOnDestroy() {
    this.subscriptionGetForecast.unsubscribe();
    this.subscriptionGetForecastForFavoritesActive.unsubscribe();
  }

}

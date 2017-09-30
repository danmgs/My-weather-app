import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';

import { WeatherData } from '../Shared/WeatherData';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  private subscription: Subscription;
  weatherResponse;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this.weatherService.weatherChanged
      .subscribe(
        (weatherdata: WeatherData) => {
          this.weatherResponse = JSON.stringify(weatherdata, undefined, 2);
        }
      );
  }

  getWeather(address: String) {
    console.log(address);
    this.weatherService.getWeather(address);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

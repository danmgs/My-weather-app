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

  private subscription: Subscription;
  weatherResponseStr: String = '';
  weatherResponse: WeatherData;
  show: boolean = false;

  favorites: WeatherFav[] = [];
  private subscriptionGetFavorites: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.getFavorites();

    this.subscriptionGetFavorites = this.weatherService.favoritesChanged
      .subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        for (let wf of res) {
          this.favorites.push(new WeatherFav(wf._id, wf.address));
        }
      });
          
    this.subscription = this.weatherService.weatherChanged
      .subscribe(
        (weatherdata: WeatherData) => {
          this.weatherResponseStr = JSON.stringify(weatherdata, undefined, 2);
          this.weatherResponse = weatherdata;
          this.show = true;
        }
      );
  }

  getWeather(address: String) {
    this.show = false;
    console.log(address);
    this.weatherService.getWeather(address);
  }

  getFavorites() {
    return this.weatherService.getFavorites();
  }

  deleteFromFavorites(id: String) {
    console.log('first call deleteFromFavorites' + id);
    return this.weatherService
      .deleteFromFavorites(id)
      .subscribe(
      (res) => {
        console.log(`deleteFromFavorites OK`);
        _.remove(this.favorites, (currentObject) => currentObject.id === id);
      },
      (error) => console.log(error)
      );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionGetFavorites.unsubscribe();
  }

}

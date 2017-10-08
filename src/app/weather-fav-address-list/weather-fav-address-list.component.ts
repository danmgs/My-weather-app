import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';

import { WeatherData } from '../Shared/WeatherData';
import { WeatherFav } from '../Shared/WeatherFav';

import * as _ from "lodash";

@Component({
  selector: 'app-weather-fav-address-list',
  templateUrl: './weather-fav-address-list.component.html',
  styleUrls: ['./weather-fav-address-list.component.css']
})
export class WeatherFavAddressListComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  resultsWeatherFav: WeatherFav[] = [];
  favorites: WeatherFav[] = [];
  private subscriptionGetFavorites: Subscription;

  ngOnInit() {

    this.getFavorites();

    this.subscriptionGetFavorites = this.weatherService.favoritesChanged
      .subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        for (let wf of res) {
          this.favorites.push(new WeatherFav(wf._id, wf.address));
        }
      }
      );

  }

  getFavorites() {
    return this.weatherService.getFavorites();
  }

  addFavorite(address) {

    this.weatherService
      .getFavorite(address)
      .subscribe(
      (res: WeatherFav) => {

        if (res === null) {
          console.log('addFavorite city not found : create one');
          this.weatherService.addFavorite(address)
            .subscribe(
            (wf: WeatherFav) => {
              this.favorites.push(wf);
            },
            (error) => console.log(error)
            );
        }
        else {
          console.log(`addFavorite city found: no need to create`);
        }

      },
      (error) => console.log(error)
      );
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
    this.subscriptionGetFavorites.unsubscribe();
  }
}

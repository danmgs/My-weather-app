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
        //console.log(res);
        this.favorites = [];
        for (let wf of res) {
          this.favorites.push(new WeatherFav(wf._id, wf.address, wf.active));
        }
      }
      );
  }

  getFavorites() {
    this.weatherService.getFavorites();
  }

  addFavoriteWithCheck(address) {

    this.weatherService
      .addFavoriteWithCheck(address)
      .subscribe(
      (res: WeatherFav) => {
        if (res !== null) {
          this.getFavorites();
        }
      },
      (error) => console.log(error)
      );
  }

  deleteFromFavorites(id: String) {
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

  onEditStatus(id: String, activeStatus: Boolean)
  {
    console.log(id);
    this.weatherService.editFavoriteStatus(id, activeStatus);
  }

  ngOnDestroy() {
    this.subscriptionGetFavorites.unsubscribe();
  }
}

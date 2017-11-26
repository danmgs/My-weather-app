import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../../../services/weather.service';

import { WeatherData } from '../../../Shared/WeatherData';
import { WeatherFav } from '../../../Shared/WeatherFav';

import * as _ from "lodash";

@Component({
  selector: 'app-weather-fav-address-list',
  templateUrl: './weather-fav-address-list.component.html',
  styleUrls: ['./weather-fav-address-list.component.css']
})
export class WeatherFavAddressListComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  favoritesResponse: WeatherFav[] = [];
  private subscriptionGetFavorites: Subscription;

  ngOnInit() {

    this.getFavorites();

    this.subscriptionGetFavorites = this.weatherService.favoritesChanged
      .subscribe(
      (response: any) => {
        //console.log(response);
        this.favoritesResponse = [];
        for (let wf of response) {
          this.favoritesResponse.push(
            new WeatherFav(wf._id, wf.address, wf.active,
              new Date(parseInt(wf._id.substring(0, 8), 16) * 1000)));
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
      (response: WeatherFav) => {
        if (response !== null) {
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
      (response) => {
        console.log(`deleteFromFavorites OK`);
        _.remove(this.favoritesResponse, (currentObject) => currentObject.id === id);
      },
      (error) => console.log(error)
      );
  }

  onEditStatus(id: String, activeStatus: Boolean) {
    this.weatherService.editFavoriteStatus(id, activeStatus);
  }

  ngOnDestroy() {
    this.subscriptionGetFavorites.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';

import { WeatherData } from '../Shared/WeatherData';
import { WeatherFav } from '../Shared/WeatherFav';

@Component({
  selector: 'app-weather-fav-address-list',
  templateUrl: './weather-fav-address-list.component.html',
  styleUrls: ['./weather-fav-address-list.component.css']
})
export class WeatherFavAddressListComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  resultsUsers: any[] = [];
  resultsWeatherFav: WeatherFav;
  private subscriptionUsers: Subscription;
  private subscriptionWeatherFavChanged: Subscription;

  ngOnInit() {
    this.getWeatherFavAddresses();
    this.getDummyUsers();
    
    this.subscriptionUsers = this.weatherService.dummyUsersChanged
    .subscribe(
      (res: any) => {
        console.log('dummyUsersChanged >>>' + JSON.stringify(res.data));
        this.resultsUsers = res.data;
      }
    );

    this.subscriptionWeatherFavChanged = this.weatherService.weatherFavChanged
    .subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        this.resultsWeatherFav = new WeatherFav(res.address);
      }
    );
  }

  getWeatherFavAddresses() {
    return this.weatherService.getWeatherFavAddresses();
  }  

  getDummyUsers() {
    return this.weatherService.getDummyUsers();
  }  

  ngOnDestroy() {
    this.subscriptionUsers.unsubscribe();
    this.subscriptionWeatherFavChanged.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { GeoService } from './geo.service';
import { GeoData } from '../Shared/GeoData';
import { WeatherData } from '../Shared/WeatherData';
import { WeatherFav } from '../Shared/WeatherFav';

@Injectable()
export class WeatherService {

  geodata: GeoData;

  weatherChanged = new Subject<WeatherData>();
  allWeatherFavoritesChanged = new Subject<WeatherData[]>();
  favoritesChanged = new Subject<WeatherFav>();

  weatherResponseFavorites: WeatherData[] = [];  

  constructor(private http: Http, private geoService: GeoService) { }

  getWeather(address: String, isFavorite: Boolean = false) {
    this.geoService.getGeoCode(address)
      .subscribe(
      (geodata: GeoData) => {
        this.getWeatherInfos(geodata)
          .subscribe(
          (weatherdata: WeatherData) => {
            if (!isFavorite)
            {
              this.weatherChanged.next(weatherdata);
            }
            else
            {
              this.weatherResponseFavorites.push(weatherdata);
            }
          },
          (error) => console.log(error)
          );
      },
      (error) => console.log(error)
      );
  }

  getWeatherInfos(geodata: GeoData) {

    const url = `http://localhost:3000/api/weather/${geodata.lat}/${geodata.lng}`;
    console.log(`Calling getWeatherInfos with ${url}`);
    return this.http.post(url, {}/*, options */)
      .map(
      (response: Response) => {
        const res = response.json();
        //console.log('getWeatherInfos' + JSON.stringify(res, undefined, 2));
        return new WeatherData(geodata, res.body.currently.temperature);
      });
  }

  getFavorites() {
    const url = `http://localhost:3000/api/weather/favorites`;
    console.log(`Calling getFavorites with ${url}`);
    return this.http.get(url)
      .subscribe(
      (response: Response) => {
        // WeatherFav
        //console.log(response.json());
        this.favoritesChanged.next(response.json());
      },
      (error) => console.log(error)
      );
  }

  getFavorite(address: String) {
    const url = `http://localhost:3000/api/weather/favorites/${address}`;
    console.log(`Calling getFavorites with ${url} ${address}`);
    return this.http.get(url)
      .map(
      (response: Response) => {

        // console.log('getFavorite' + JSON.stringify(response, undefined, 2));
        try {
          const res = response.json();
          return new WeatherFav(res._id, res.address);
        }
        catch (error) {
          return null;
        }
      }
      );
  }

  addFavoriteWithCheck(address: String) {

    const url = `http://localhost:3000/api/weather/favorites/check`;
    console.log(`Calling addFavoriteWithCheck with ${url} ${address}`);
    return this.http.post(url, { address })
      .map(
      (response: Response) => {
        try {
          const res = response.json();
          //console.log('addFavoriteWithCheck' + JSON.stringify(res, undefined, 2));
          return new WeatherFav(res._id, res.address);
        }
        catch (error) {
          return null;
        }
      });
  }

  addFavorite(address: String) {

    const url = `http://localhost:3000/api/weather/favorites`;
    console.log(`Calling getFavorites with ${url} ${address}`);
    return this.http.post(url, { address })
      .map(
      (response: Response) => {
        const res = response.json();
        console.log('addFavorite' + JSON.stringify(res, undefined, 2));
        return new WeatherFav(res._id, res.address);
      });
  }

  deleteFromFavorites(id: String) {

    let headers = new Headers();
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    const url = `http://localhost:3000/api/weather/favorites/${id}`;
    console.log(`Calling deleteFromFavorites with ${url}`);
    return this.http.delete(url, { headers });
  }

  getWeatherForFavorites() {

    this.weatherResponseFavorites = [];

    const url = `http://localhost:3000/api/weather/favorites`;
    console.log(`Calling getFavorites with ${url}`);
    this.http.get(url)
      .subscribe(
      (response: Response) => {

        const favorites = response.json();
        // console.log(favorites);

        favorites.forEach((fav) => {
          this.getWeather(fav.address, true);
        });

        this.allWeatherFavoritesChanged.next(this.weatherResponseFavorites);
      },
      (error) => console.log(error)
      );

  }

}

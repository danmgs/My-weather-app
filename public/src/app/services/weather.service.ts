import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
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
  allForecastForFavoritesChanged = new Subject<WeatherData[]>();
  favoritesChanged = new Subject<WeatherFav>();

  weatherFavoritesResponse: WeatherData[] = [];

  constructor(private http: Http, private geoService: GeoService) { }

  getForecast(address: String, isFavorite: Boolean = false) {
    this.geoService.getGeoCode(address)
      .subscribe(
      (geodata: GeoData) => {
        this.getForecastInfos(geodata)
          .subscribe(
          (weatherdata: WeatherData) => {
            if (!isFavorite) {
              this.weatherChanged.next(weatherdata);
            } else {
              this.weatherFavoritesResponse.push(weatherdata);
            }
          },
          (error) => console.log(error)
          );
      },
      (error) => console.log(error)
      );
  }

   getForecastByGeoCode(geodata: GeoData) {

    this.getForecastInfos(geodata)
      .subscribe(
      (weatherdata: WeatherData) => {
          this.weatherChanged.next(weatherdata);
      },
      (error) => console.log(error)
      );
  }

  private getForecastInfos(geodata: GeoData) {

    const url = `${environment.apiUrl}/api/weather/${geodata.lat}/${geodata.lng}`;

    return this.http.post(url, {}/*, options */)
      .map(
      (response: Response) => {
        const res = response.json();
        // console.log('getForecastInfos', JSON.stringify(res, undefined, 2));
        return new WeatherData(
          geodata,
          res.body.currently.temperature,
          res.body.currently.icon,
          res.body.currently.precipProbability,
          res.body.currently.humidity,
          res.body.currently.windSpeed,
          res.body.currently.cloudCover,
          res.body.daily.summary);
      });
  }

  getFavorites() {

    const url = `${environment.apiUrl}/api/weather/favorites`;
    console.log('getFavorites', url);
    return this.http.get(url)
      .subscribe(
      (response: Response) => {
        this.favoritesChanged.next(response.json());
      },
      (error) => console.log(error)
      );
  }

  getFavorite(address: String) {

    const url = `${environment.apiUrl}/api/weather/favorites/${address}`;
    console.log('getFavorite', url);
    return this.http.get(url)
      .map(
      (response: Response) => {
        try {
          const res = response.json();
          return new WeatherFav(res._id, res.address, res.active);
        } catch (error) {
          return null;
        }
      }
      );
  }

  addFavoriteWithCheck(address: String) {

    const url = `${environment.apiUrl}/api/weather/favorites/check`;
    // console.log(`Calling addFavoriteWithCheck with ${url} ${address}`);
    return this.http.post(url, { address })
      .map(
      (response: Response) => {
        try {
          const res = response.json();
          return new WeatherFav(res._id, res.address, res.active);
        } catch (error) {
          return null;
        }
      });
  }

  addFavorite(address: String) {

    const url = `${environment.apiUrl}/api/weather/favorites`;
    // console.log(`Calling getFavorites with ${url} ${address}`);
    return this.http.post(url, { address })
      .map(
      (response: Response) => {
        const res = response.json();
        return new WeatherFav(res._id, res.address, res.active);
      });
  }

  deleteFromFavorites(id: String) {

    const url = `${environment.apiUrl}/api/weather/favorites/${id}`;
    // console.log(`Calling deleteFromFavorites with ${url}`);
    return this.http.delete(url);
  }

  getForecastForFavoritesActive() {

    this.weatherFavoritesResponse = [];

    const url = `${environment.apiUrl}/api/weather/favorites/active/true`;
    // console.log(`Calling getForecastForFavoritesActive with ${url}`);
    this.http.get(url)
      .subscribe(
      (response: Response) => {

        const favorites = response.json();

        favorites.forEach((fav) => {
          this.getForecast(fav.address, true);
        });

        this.allForecastForFavoritesChanged.next(this.weatherFavoritesResponse);
      },
      (error) => console.log(error)
      );
  }

  editFavoriteStatus(id: String, activeStatus: Boolean) {

    const url = `${environment.apiUrl}/api/weather/favorites/${id}`;
    // console.log(`Calling editFavoriteStatus with ${id} ${activeStatus}`);
    return this.http.put(url, { active: activeStatus })
      .subscribe(
      (response: Response) => {
        const res = response.json();
        // console.log('Done !', res);
      });
  }
}

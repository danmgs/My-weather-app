import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { GeoData } from '../Shared/GeoData';

@Injectable()
export class GeoService {

  constructor(private http: Http) { }

  getGeoCode(address: String) {

    const url = `${environment.serverUrl}/api/geo?address=${address}`;
    // console.log('getGeoCode', url);
    return this.http.get(url)
      .map(
      (response: Response) => {
        const res = response.json();
        return new GeoData(
          res.geometry.location.lat,
          res.geometry.location.lng,
          res.formatted_address);
      }
      );
  }

}

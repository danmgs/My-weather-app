import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { QuoteData } from '../Shared/QuoteData';
import { QuoteCompanyNewsData } from '../Shared/QuoteCompanyNewsData';

@Injectable()
export class QuoteService {

  quotesArray: QuoteData[];

  constructor(private http: Http) { }

  getQuotes(symbol: String, from: String, to: String) {
    const url = `http://localhost:3000/api/finance/quotes?symbol=${symbol}&from=${from}&to=${to}`;
    // console.log('getQuotes', url);
    return this.http.get(url)
      .map(
      (response: Response) => {
        // const res = response.json();
        // console.log(response.json());

        // https://codecraft.tv/courses/angular/http/http-with-observables/
        return response.json().map(item => {
          return new QuoteData(
            item.close,
            item.date,
            item.high,
            item.low,
            item.open,
            item.symbol,
            item.volume
          );
        }
        );
      });
  }

  getCompanyNews(symbol: String) {
    const url = `http://localhost:3000/api/finance/companynews?symbol=${symbol}`;
    // console.log('getCompanyNews', url);
    return this.http.get(url)
      .map(
      (response: Response) => {

        console.log(response.json());

        return response.json().map(item => {
          return new QuoteCompanyNewsData(
            item.guid,
            item.symbol,
            item.title,
            item.description,
            item.summary,
            item.date,
            item.link
          );
        }
        );
      });
  }
}

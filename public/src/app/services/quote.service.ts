import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import {QuoteData} from '../Shared/QuoteData';

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getQuotes(symbol: String, from: String, to: String)
  {
    const url = `http://localhost:3000/api/quotes?symbol=${symbol}&from=${from}&to=${to}`;
    console.log(`Calling getQuotes with ${symbol},  ${from},  ${to}`);
    return this.http.get(url)
      .map(
        (response: Response) => {
          const res = response.json();
          console.log(res);
          return res;
          // return new QuoteData(
          //   res.close,
          //   res.date,
          //   res.high,
          //   res.low,
          //   res.open,
          //   res.symbol,
          //   res.volume);
        }
      );
  }

}

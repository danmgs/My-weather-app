import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../services/quote.service';
import { QuoteData } from '../Shared/QuoteData';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  // quotesResponse: QuoteData;
  quotesResponse: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    
  }

  getQuotes(symbol: String, from: String, to: String)
  {
    this.quoteService.getQuotes(symbol, from, to)
    // .subscribe(
    //   (quoteData: QuoteData) => {
    //     this.quotesResponse = quoteData;
    //   }
      .subscribe(
        (res: Response) => {
          console.log('subscribe');
          this.quotesResponse = JSON.stringify(res, undefined, 2);
        }
    )
  }

}

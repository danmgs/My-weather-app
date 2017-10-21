import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../services/quote.service';
import { QuoteData } from '../Shared/QuoteData';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotesArray: QuoteData[];

  data: any;

  msgs: Message[];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {

  }

  getQuotes(symbol: String, from: String, to: String) {
    this.quoteService.getQuotes(symbol, from, to)
      .subscribe(
      (res: QuoteData[]) => {
        console.log('subscribe');
        this.quotesArray = res;
        this.drawChart(res);
      },
      (error) => console.log(error)
      );
  }
  // label: String, labels: Date[], data: Number[], label2: String, data2: Number[]
  drawChart(quotesdata: QuoteData[]) {

    let labels = quotesdata.map(function (quotedata) {
      return quotedata.date
    });
    let dataO = quotesdata.map(function (quotedata) {
      return quotedata.open
    });
    let dataC = quotesdata.map(function (quotedata) {
      return quotedata.close
    });
    let dataH = quotesdata.map(function (quotedata) {
      return quotedata.high
    });
    let dataL = quotesdata.map(function (quotedata) {
      return quotedata.low
    });

    this.data = {
      labels: labels,//['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Open',
          data: dataO, //[65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Close',
          data: dataC,
          fill: false,
          borderColor: '#565656'
        },
        {
          label: 'High',
          data: dataH,
          fill: false,
          borderColor: '#FFCE56'
        },
        {
          label: 'Low',
          data: dataL,
          fill: false,
          borderColor: '#FF6384'
        }
      ]
    }
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }

}

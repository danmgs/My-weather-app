import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../../services/quote.service';
import { QuoteData } from '../../Shared/QuoteData';
import { QuoteCompanyNewsData } from '../../Shared/QuoteCompanyNewsData';
import { Message } from 'primeng/primeng';


@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotesResponse: QuoteData[];
  quoteCompanyNewsResponse: QuoteCompanyNewsData[];

  data: any;
  options: any;

  fromDate: Date;
  toDate: Date;

  msgs: Message[];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {

    this.toDate = new Date();
    this.fromDate = new Date();
    this.fromDate.setDate(this.fromDate.getDate() - 60);
  }

  getData(symbol: String, from: String, to: String) {
    // console.log("getData", symbol, from, to);
    this.getQuotes(symbol, from, to);
    this.getTopCompanyNews(symbol, 5);
  }

  getQuotes(symbol: String, from: String, to: String) {
    this.quoteService.getQuotes(symbol, from, to)
      .subscribe(
      (response: QuoteData[]) => {
        this.quotesResponse = response;
        this.drawChart(response);
      },
      (error) => console.log(error)
      );
  }

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

    this.options = {
      scales: {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            unit: "day",
            tooltipFormat: "MM-DD-YYYY",
          },
        }],
      },
      title: {
        display: true,
        text: 'HISTORICAL QUOTES',
        fontSize: 12
      },
      legend: {
        position: 'bottom'
      }
    };

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
    };
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }

  getTopCompanyNews(symbol: String, maxCount: number) {
    this.quoteService.getCompanyNews(symbol)
      .subscribe(
      (response: QuoteCompanyNewsData[]) => {
        let max = response.length > maxCount ? maxCount : response.length;
        this.quoteCompanyNewsResponse = response.slice(0, maxCount) ;
      },
      (error) => console.log(error)
      );
  }

}

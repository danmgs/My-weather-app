import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../../services/news.service';
import { NewsSourceData } from '../../../Shared/NewsSourceData';

@Component({
  selector: 'app-news-sources-list',
  templateUrl: './news-sources-list.component.html',
  styleUrls: ['./news-sources-list.component.css']
})
export class NewsSourcesListComponent implements OnInit {

  newsSourceResponse: NewsSourceData[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getSources('en', 'general', 'us');
  }

  getSources(language: String, category: String, country: String) {
    this.newsService.getSources(language, category, country)
      .subscribe(
      (response: NewsSourceData[]) => {
        this.newsSourceResponse = response;
      }
      );
  }
}

import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../../services/news.service';
import { NewsArticleData } from '../../../Shared/NewsArticleData';

@Component({
  selector: 'app-news-articles-list',
  templateUrl: './news-articles-list.component.html',
  styleUrls: ['./news-articles-list.component.css']
})
export class NewsArticlesListComponent implements OnInit {

  newsArticleResponse: NewsArticleData[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getArticles('google-news', 'top');
  }

  getArticles(source: String, sortBy: String) {
    this.newsService.getArticles(source, sortBy)
      .subscribe(
      (response: NewsArticleData[]) => {
        this.newsArticleResponse = response;
      }
      );
  }

}
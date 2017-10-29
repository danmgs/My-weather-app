import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { NewsArticleData } from '../Shared/NewsArticleData';
import { NewsSourceData } from '../Shared/NewsSourceData';

@Injectable()
export class NewsService {

  NewsArticleResponse: NewsArticleData[];
  NewsSourceDataResponse: NewsSourceData[];

  constructor(private http: Http) { }

  getSources(language: String, category: String, country: String) {
    const url = `http://localhost:3000/api/news/sources?language=${language}&category=${category}&country=${country}`;
    console.log('getSources', url);
    return this.http.get(url)
      .map(
      (response: Response) => {

        console.log('getSources', response.json())

        return response.json().map(item => {
          return new NewsSourceData(
            item.id,
            item.name,
            item.description,
            item.url,
            item.category,
            item.language,
            item.country
          );
        }
        );
      });
  }

  getArticles(source: String, sortBy: String) {
    const url = `http://localhost:3000/api/news/articles?source=${source}&sortBy=${sortBy}`;
    console.log('getArticles', url);
    return this.http.get(url)
      .map(
      (response: Response) => {
        return response.json().map(item => {
          return new NewsArticleData(
            item.author,
            item.title,
            item.description,
            item.url,
            item.urlToImage,
            item.publishedAt
          );
        }
        );
      });
  }
}

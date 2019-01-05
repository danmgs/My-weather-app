import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsSourcesListComponent } from './news-sources-list/news-sources-list.component';
import { NewsArticlesListComponent } from './news-articles-list/news-articles-list.component';
import { NewsService } from '../../services/news.service';

@NgModule({
    declarations: [
        NewsSourcesListComponent,
        NewsArticlesListComponent
    ],
    imports: [CommonModule],
    exports: [],
    providers: [NewsService]
})
export class NewsModule {}
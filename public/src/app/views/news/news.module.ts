import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsSourcesListComponent } from './news-sources-list/news-sources-list.component';
import { NewsArticlesListComponent } from './news-articles-list/news-articles-list.component';

@NgModule({
    declarations: [
        NewsSourcesListComponent,
        NewsArticlesListComponent
    ],
    imports: [CommonModule],
    exports: []
})
export class NewsModule {}
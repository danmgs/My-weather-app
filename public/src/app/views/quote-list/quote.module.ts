import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { CustomFiltersModule } from '../../customfilters.module';
import { PrimeNgModule } from '../../primeng.module';

import { QuoteListComponent } from './quote-list.component';

import { QuoteService } from '../../services/quote.service';

@NgModule({
    declarations: [
        QuoteListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomFiltersModule,
        PrimeNgModule
    ],
    exports: [],
    providers: [QuoteService]
})
export class QuoteModule {}
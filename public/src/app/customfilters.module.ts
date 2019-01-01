import { NgModule } from "@angular/core";

import { ExponentialStrengthPipe } from './filters/exponential-strength-pipe';
import { ConvertToDegrePipe } from './filters/convert-degre-pipe';
import { TruncatePipe } from './filters/truncate-pipe';

@NgModule({
    declarations: [
        ExponentialStrengthPipe,
        ConvertToDegrePipe,
        TruncatePipe
    ],
    imports: [],
    exports: [
        ExponentialStrengthPipe,
        ConvertToDegrePipe,
        TruncatePipe
    ]
})
export class CustomFiltersModule { }
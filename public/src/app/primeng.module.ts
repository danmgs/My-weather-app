import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule, CheckboxModule, ChartModule, GrowlModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        ChartModule,
        GrowlModule,
        CalendarModule
    ],
    exports: [
        ButtonModule,
        CheckboxModule,
        ChartModule,
        GrowlModule,
        CalendarModule
    ],
})
export class PrimeNgModule { }
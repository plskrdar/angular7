import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ReportListComponent} from './components/report-list/report-list.component';


@NgModule({
    declarations: [
        AppComponent,
        ReportListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbDatepickerModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

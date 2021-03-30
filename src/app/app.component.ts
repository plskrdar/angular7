import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    venueList: any[] = ['Lokal 1', 'Lokal 2', 'Lokal 3'];
    venueValue: string;
    dateFrom: any;
    dateTo: any;
    reportCollection: any;
    retrievingData = false;
    unSubscribe = new Subject();

    constructor(private apiService: ApiService) {
    }
    ngOnInit() {
        this.apiService.fakeServer$.pipe(takeUntil(this.unSubscribe)).subscribe((collection) => this.updateCollection(collection));
    }

    ngOnDestroy() {
        this.unSubscribe.next();
        this.unSubscribe.complete();
    }

    retrieveReport() {
        if (this.venueValue && this.dateFrom && this.dateTo) {
            if (!this.retrievingData) {
                this.retrievingData = true;

                const params = {
                    venue: this.venueValue,
                    dateFrom: this.dateFrom,
                    dateTo: this.dateTo
                };

                //this.apiService.retrieveExportData(params).subscribe((collection) => this.updateCollection(collection));
                this.apiService.retrieveExportData(params);
            } else {
                console.log('Processing request...');
            }
        } else {
            console.error('Something went wrong');
        }
    }

    updateCollection(collection) {
        this.reportCollection = collection;
        this.retrievingData = false;
    }
}

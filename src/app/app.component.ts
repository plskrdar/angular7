import {Component} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    venueList: any[] = ['Lokal 1', 'Lokal 2', 'Lokal 3'];
    venueValue: string;
    dateFrom: any;
    dateTo: any;
    reportCollection: any;
    retrievingData = false;

    constructor(private apiService: ApiService) {
    }

    retrieveReport() {
        if (this.venueValue && this.dateFrom && this.dateTo) {
            if (!this.retrievingData) {
                this.retrievingData = true;

                const params = {
                    venue: this.venueValue,
                    dateFrom: new Date(this.dateFrom).getTime(),
                    dateTo: new Date(this.dateTo).getTime(),
                };

                this.apiService.retrieveExportData(params).subscribe((collection) => this.updateCollection(collection));
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

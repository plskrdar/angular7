import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    fakeServer$ = new Subject();
    fakeResponse = [
        {
            name: 'Test',
            date: '2018-02-26',
            time: '12:00',
            user: 'User1',
            venue: 'Lokal 1'
        },
        {
            name: 'Test',
            date: '2018-02-11',
            time: '12:00',
            user: 'User1',
            venue: 'Lokal 1'
        },
        {
            name: 'Test',
            date: '2018-02-23',
            time: '12:00',
            user: 'User1',
            venue: 'Lokal 1'
        },
        {
            name: 'Test',
            date: '2018-02-21',
            time: '8:00',
            user: 'User2',
            venue: 'Lokal 1'
        },
        {
            name: 'Test',
            date: '2018-02-11',
            time: '12:00',
            user: 'User4',
            venue: 'Lokal 3'
        },
        {
            name: 'Test',
            date: '2018-02-23',
            time: '12:00',
            user: 'User1',
            venue: 'Lokal 2'
        },
        {
            name: 'Test',
            date: '2018-05-23',
            time: '16:00',
            user: 'User3',
            venue: 'Lokal 1'
        },
    ];

    constructor(private http: HttpClient) {
    }

    retrieveExportData(params) {
        // return this.http.get('localhost:8000/desired/url/', params);
        this.fakeServer$.next(this.fakeResponse);
    }
}



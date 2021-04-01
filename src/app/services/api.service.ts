import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    retrieveExportData(params) {
        return this.http.get('localhost:8000/exports/retrieve', params);
    }
}



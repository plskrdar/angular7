import {Component, Input, OnInit} from '@angular/core';
import {ExportsReportRow} from '../../interfaces/exportsReportRow';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

    @Input() reportCollection: ExportsReportRow[];

    constructor() {
    }

    ngOnInit() {
    }

}

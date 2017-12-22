import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { TranslateService } from '@ngx-translate/core';
import { map, filter, reduce } from 'rxjs/operators';
import { Jsonp } from '@angular/http';

@Component({
    selector: 'stock-chart-example',
    template: `<chart type="StockChart" [options]="options"></chart>`
})
export class StockChartExample {

    result: any;
    combined: any;
    error: any;
    http: Http;
    contract: any;
    customer: any;
    loadDataSuccessFully: any;

    constructor(http: Http) {

        this.http = http;     
        this.loadDataSuccessFully();       

    }

    loadDataSuccessFully(){
        this.result = {data:[]};
        this.http.get('http://95.183.10.25:3000/api/currencys/btc_usd/1000/288').pipe(map((res: Response) => res.json())).subscribe(
        res => this.result = res;
        

        this.options = {
                title : { text : 'AAPL Stock Price' },
                series : [{
                    name : 'AAPL',
                    data : this.result.data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        );
    }
    options: Object;
}
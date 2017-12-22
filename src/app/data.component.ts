import {Http} from '@angular/http';
import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: ``,
})
export class DataComponent { 
 
    data;
 
    constructor(private http:Http) {
        this.http.get('https://api.coinmarketcap.com/v1/global')
                .subscribe(res => this.data = res.json());
    }
 
}
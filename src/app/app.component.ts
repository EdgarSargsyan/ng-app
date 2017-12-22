import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { map, filter, reduce } from 'rxjs/operators';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[]
})

export class AppComponent {
	title = 'CryptoCurrency Market Сharts';
	result: any;
    combined: any;
    error: any;
    http: Http;
    contract: any;
    customer: any;
    coindataAsPromise: any;
    loadtestdataAsPromise: any;
    pendingRequest: any;
    capitol: any;
    activeCountry: string;

	user = {
	    name: 'Arthur',
	    age: 42
	  };

    constructor(http: Http) {

        this.http = http;
        this.loadcoindataAsPromise();
        this.loadtestdataAsPromise();        
        this.loadDataSuccessFully();       

    }

    loadcoindataAsPromise(){
        this.coindataAsPromise = {};
        this.http.get('https://api.coinmarketcap.com/v1/global/').toPromise()
        .then((res: Response) => {
            this.coindataAsPromise.data = res.json();
        });
    }

    loadtestdataAsPromise(){
        this.testdataAsPromise = {};
        this.http.get('http://95.183.10.25:3000/api/currencys/btc_usd/1000/288').toPromise()
        .then((res: Response) => {
            this.testdataAsPromise.data = res.json();
        });
    }

    loadDataSuccessFully(){
        this.result = {data:[]};
        this.http.get('http://95.183.10.25:3000/api/currencys/btc_usd/1000/288').pipe(map((res: Response) => res.json())).subscribe(res => this.result = res);
    }


    /* Translation */

    @Language() lang: string;

    title: string;

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    ngOnInit(): void {
        this.translation.translationChanged().subscribe(
            () => { this.title = this.translation.translate('Title'); }
        );
    }

    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
    }
	
}

/*
@Injectable() export class AppComponent {
	constructor(private http: Http) { this.http = http; }
	title = 'app works!';
          data :any;
          constructor(private http:Http) {
                this.http.get('https://api.coinmarketcap.com/v1/global/')
               .subscribe(res => this.data = res.json())
                .map((res: Response) => <observable[]>response.json())            
                            .catch(this.handleError);console.log(1);
          }
}
*/
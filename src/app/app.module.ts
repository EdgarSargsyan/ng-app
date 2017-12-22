import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { StockChartExample } from './stockChartExample';
import { JsonpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
 
import { ItemComponent }   from './item.component';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType } from 'angular-l10n';

const l10nConfig: L10nConfig = {
    locale: {
        languages: [
            { code: 'en', dir: 'ltr' },
            { code: 'ru', dir: 'ltr' }
        ],
        language: 'en',
        storage: StorageStrategy.Cookie
    },
    translation: {
        providers: [
            { type: ProviderType.Static, prefix: './assets/locale-' }
        ],
        caching: true,
        missingValue: 'No key'
    }
};

declare var require: any;

export function highchartsFactory() {
      const hc = require('highcharts/highstock');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currency/:id',      component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
    imports:      [ BrowserModule, JsonpModule, FormsModule, HttpModule,HttpClientModule, RouterModule.forRoot( appRoutes, { enableTracing: true } ), ChartModule, TranslationModule.forRoot(l10nConfig) ],
    declarations: [ 
                    AppComponent, HomeComponent, 
                    AboutComponent, NotFoundComponent, 
                    ItemComponent, StockChartExample
                ],
    providers: [ AppComponent, { provide: HighchartsStatic, useFactory: highchartsFactory }, ItemComponent, HomeComponent ],
    bootstrap:    [ AppComponent, ItemComponent ]
})
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
          this.l10nLoader.load();
  }
}
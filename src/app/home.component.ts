import { Component} from '@angular/core';
import { Language } from 'angular-l10n';
  
@Component({
    selector: 'home-app',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    @Language() lang: string;

    ngOnInit(): void { }
}
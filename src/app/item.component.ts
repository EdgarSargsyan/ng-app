import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
  
@Component({
    selector: 'item-info',
  	templateUrl: './item.component.html',
})
export class ItemComponent { 
     
    private id: number;
    constructor(private activateRoute: ActivatedRoute){
         
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

}
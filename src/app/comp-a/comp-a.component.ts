import { Component } from '@angular/core';
import { App1Component } from '../Services/app1.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  mess1:String="Component C";
  OnClick(){
       const serviceobj=new App1Component()
       serviceobj.OnClick(this.mess1);
   }
}

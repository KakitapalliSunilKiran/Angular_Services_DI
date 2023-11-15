import { Component } from '@angular/core';
import { App1Component } from '../Services/app1.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
 // providers:[App1Component]
})
export class CompBComponent {
  mess1:String="Component C";
  username:string="";
  status:string="";
  OnClick(){
       const serviceobj=new App1Component()
       serviceobj.OnClick(this.mess1);
   }

   constructor(private component:App1Component){
  }

   addToUsers(){
      this.component.adduser(this.username,this.status)
   }
}

import { Component } from '@angular/core';
import { App1Component } from '../Services/app1.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  
})
export class CompBComponent {
  mess1:String="Component C";
  username:string="";
  status:string="";

  constructor(private component:App1Component){
  }
  OnClick(){
     //  const serviceobj=new App1Component()
     this.component.OnClick(this.mess1);
   }

  

   addToUsers(){
      this.component.adduser(this.username,this.status)
   }
}

import { Component } from '@angular/core';
import { App1Component } from '../Services/app1.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
  
})
export class CompCComponent {

  constructor(private component:App1Component){
  }
  //Host binding
  //host listerner
  //custom attribute
  //custom structuraldirectives
  users:{name:string,status:string}[]=[];

  ngOnInit(){
    this.users=this.component.getUser();
  }

    

  mess1:String="Component C";
  OnClick(){
       //const serviceobj=new App1Component()
       this.component.OnClick(this.mess1);
   }
}

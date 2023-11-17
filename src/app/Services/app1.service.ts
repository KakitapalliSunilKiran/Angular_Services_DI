import { Injectable } from "@angular/core";
import { Iinjection } from "./inject.service";

@Injectable()
export class App1Component{

    constructor(private obj:Iinjection){

    }

    users=[
        {name:'sunil',status:'active'},
        {name:'harsha',status:'Inactive'},
        {name:'Prashant',status:'active'},
        {name:'Kiran',status:'active'}

     ]

    
    OnClick(message:String){
       
        alert(" you have clicked the button I am in Service111 check11  222222222222222"+message)
    }


       
       getUser(){
        return this.users;
       }

       adduser(name:string,status:string){
        this.obj.adduser();
        this.users.push({name,status})
       }
}

//app-component->A->B->C
// We will create a Service Class and Provide in Providers array or
//if you want hierarichal dependency injection yo can place in App.Module.ts
// you can place in separate child component also then its child component can use
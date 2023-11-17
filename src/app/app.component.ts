import { Component } from '@angular/core';
import { App1Component } from './Services/app1.service';
import { Iinjection } from './Services/inject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[App1Component,Iinjection]
})
export class AppComponent {
  title = 'servicespoc';
}

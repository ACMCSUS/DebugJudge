import { Component } from '@angular/core';
import {ApiService} from "./api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ApiService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  // notifications = [];
  //
  // constructor(api : ApiService) {
  // }

}

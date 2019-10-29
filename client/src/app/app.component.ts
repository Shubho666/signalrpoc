import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TestingService} from './service/testing.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public router:Router){

  }
  ngOnInit(){

  }
  title = 'FrontEnd';
  card=[1,2,3,4,5,6];
  routeToCard(item:any){
    console.log(item);
    this.router.navigate([`/board/${item}`])
  }
}

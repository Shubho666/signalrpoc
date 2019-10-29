import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(public http:HttpClient) { }
  // PostMethod(id):void{
  //   console.log("Hey")
  //   this.http.post<any>("http://localhost:5001/api/values",id);
  // }
}



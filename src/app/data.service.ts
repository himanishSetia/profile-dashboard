import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIEndPoint = environment.api_server;

  tempData:String;

  constructor(private http:HttpClient) { }

  sendEmail(data){
    
    return this.http.get(this.APIEndPoint+'api/sendMail?comment='+data.comment+'&name='+data.name+'&email='+data.email+'&occupation='+data.occupation);
  }

  reduce(data){
    return this.http.get(this.APIEndPoint+'api/reduce?map='+data);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tempData:String;

  constructor(private http:HttpClient) { }

  sendEmail(data){
    
    return this.http.get('https://profile-email-server.herokuapp.com/api/sendMail?comment='+data.comment+'&name='+data.name+'&email='+data.email+'&occupation='+data.occupation);
  }

  reduce(data){
    return this.http.get('https://profile-email-server.herokuapp.com/api/reduce?map='+data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

 // private REST_API_SERVER = "https://localhost:44391/certificates";
  private REST_API_SERVER = window.location.protocol +"//"+ window.location.hostname +"/certificates";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
   alert(this.REST_API_SERVER);
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
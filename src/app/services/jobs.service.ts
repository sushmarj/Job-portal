import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobsService {
  serviceUrl:string="http://localhost:3000/api/job/";
  constructor(private http:HttpClient) { }
  getJobs(){
    console.log(this.http.get(this.serviceUrl));
    return this.http.get(this.serviceUrl);
    }
}

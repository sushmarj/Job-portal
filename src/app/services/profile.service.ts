import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  serviceUrl: string = "http://localhost:3000/api/users/";
  constructor(private http: HttpClient, private homeService : HomeService) { }
  
  getUsers() {
    return this.http.get(this.serviceUrl + this.homeService.getToken());
  }

  // getProfileById(_id){
  //   console.log(this.http.get(this.serviceUrl+_id))
  //   return this.http.get(this.serviceUrl+_id);
  // }
  updateProfileById(_id,newUserObj){
    return this.http.put(this.serviceUrl+_id,newUserObj)
  }

  addEducationDetails(eduObj) {
    return this.http.put(this.serviceUrl + this.homeService.getToken(), eduObj)
  }
}

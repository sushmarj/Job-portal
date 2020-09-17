import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  serviceUrl: string = "http://localhost:3000/api/users/";

  constructor(private http: HttpClient) { }

  // getUsers(){
  //   return this.http.get(this.serviceUrl);
  // }
  addUser(fname, lname, email, password) {
    let newUser = {
      profileName: fname + " " + lname, 
      profileImage: "i",
      email: email, 
      password: password,
      address: "",
      description: "",
      profileLink: "http://connectO.com/" + fname + "_" + lname,
      isCompany: false,
      educationDetails: [],
      workExp: [],
      Interest: [],
      jobs: [],
      posts: []
    }
    console.log(newUser);
    return this.http.post(this.serviceUrl, newUser);

  }



}

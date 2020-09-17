import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Home } from '../viewmodels/home.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serviceUrl: string = "http://localhost:3000/api/users/home/";
  serviceUrl1: string = "http://localhost:3000/api/users/";
  constructor(private http: HttpClient) { }
  token: String;
  decodedObj: any = {};
  getToken() {
    this.token = localStorage.getItem("token");
    this.decodedObj = this.parseJwt(this.token);
    return this.decodedObj._id;
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  getHome(): Observable<Home[]> {
    return this.http.get<Home[]>(this.serviceUrl + this.getToken());
  }

  addPostToDb(obj) {
    return this.http.put(this.serviceUrl1 + this.getToken(), obj)
  }
}

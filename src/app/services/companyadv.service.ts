import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';

import { Observable } from 'rxjs';
import { Companyadv } from '../viewmodels/companyadv.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class CompanyadvService {
  serviceUrl: string = "http://localhost:3000/api/advertise/";

  constructor(private http: HttpClient) { }
  
  getCompanyadv(): Observable<Companyadv[]> {
    return this.http.get<Companyadv[]>(this.serviceUrl);
  }
}

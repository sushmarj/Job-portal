import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Connections } from '../viewmodels/connections.viewmodel';
@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {
  serviceUrl:string="http://localhost:3000/api/users/";
  constructor(private http:HttpClient) { }
  getConnections():Observable<Connections[]>{
    return this.http.get<Connections[]>(this.serviceUrl);
      }
}

import { Component, OnInit } from '@angular/core';

import { ConnectionsService } from 'src/app/services/connections.service';
import { HomeService } from 'src/app/services/home.service';

import { Connections } from 'src/app/viewmodels/connections.viewmodel';
import { Home } from 'src/app/viewmodels/home.viewmodel';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
connections:Connections[]=[];
home:Home[]=[];
userObj:any={};

  constructor(private connectionService:ConnectionsService,
    private homeService:HomeService) { }

  ngOnInit() {
    this.getConnectionsFromService();
    this. getFromHomeService();
  }
  getConnectionsFromService(){
    this.connectionService.getConnections().subscribe((res)=>{
      this.connections=res;
      console.log(this.connections)
    });
  }
  getFromHomeService() {
    this.homeService.getHome().subscribe((res) => {
      this.userObj = res;
      console.log(this.userObj);
    });
  }
}

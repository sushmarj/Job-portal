import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/services/home.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: any = {};
    constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getUsersFromService();
  }
  getUsersFromService() {
    this.profileService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
  
}

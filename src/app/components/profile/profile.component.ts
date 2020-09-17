import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: any = {};
  constructor(private profileService: ProfileService, private router: Router) { }

  name: any;
  ngOnInit() {
    this.getUsersFromService();
  
  }

  getUsersFromService() {
    this.profileService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
      this.name = this.users.profileName;
    });
  }

  editProfile() {
    this.router.navigate(['/edit-profile/' + this.users._id])
  }
}

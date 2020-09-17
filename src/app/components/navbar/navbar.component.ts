import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';
import { AuthService } from 'src/app/authentication/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private jobService: WorkService, private authService: AuthService) { }

  ngOnInit() {
  }

  toggle() {
    this.jobService.onToggle();
  }

  logOut() {
    this.authService.logOutUser();
  }
}

import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

import { CompanyadvService } from 'src/app/services/companyadv.service';

import { PostService } from '../../services/post.service';

import { Home } from 'src/app/viewmodels/home.viewmodel';
import { Companyadv } from 'src/app/viewmodels/companyadv.viewmodel';
import { Post } from 'src/app/viewmodels/post.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  writePost: boolean;
  home: any = {};
  companyadv: Companyadv[] = [];
  post: any = [];
  postObj: any = {
    userObj: this.homeService.getToken(),
    postText: "",
    profile: {},
    postImage: "",
    postVideo: "",
    dateOfPost: Date(),
    description: ""
  }
  constructor(private homeService: HomeService, private companyadvService: CompanyadvService, private postService: PostService) { }

  ngOnInit() {
    this.writePost = false;
    this.getFromHomeService();
    this.getFromCompanyadvService();

  }
  onToggle() {
    this.writePost = !this.writePost;
  }
  changeColor() {

  }

  getFromHomeService() {
    this.homeService.getHome().subscribe((res) => {
      this.home = res;
      console.log(this.home);
    });
    this.getFromPostService();
  }

  getFromCompanyadvService() {
    this.companyadvService.getCompanyadv().subscribe((res) => {
      this.companyadv = res;
      console.log(this.companyadv);
    });
  }
  getFromPostService() {
    this.homeService.getHome().subscribe((res) => {
      this.post = res;
    })
  }
  addPostToService(){
  //get Profile from postService
    this.home.posts.push(this.postObj)
    console.log(this.home);
    
    this.homeService.addPostToDb(this.home).subscribe((res) => {
      console.log("Home Posts");
      console.log(res);
      alert("Posted Successfully");
    })
  }
}

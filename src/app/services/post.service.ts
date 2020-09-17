import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../viewmodels/post.viewmodel';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  serviceUrl: string = " http://localhost:3000/api/users/userPosts/";
  constructor(private http: HttpClient) { }
  
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.serviceUrl);
  }

  addPost(name, jname, image, postText) {
    let newPost = {
      profileName: name,
      jobName: jname,
      profileImage: image,
      postText: postText
    }
    return this.http.post(this.serviceUrl, newPost);
  }

}

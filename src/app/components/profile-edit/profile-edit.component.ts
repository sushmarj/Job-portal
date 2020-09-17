import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  userObj: any = {}
  myForm: FormGroup;

  generalInfo: boolean;
  educationDetail: boolean;
  workExperience: boolean;
  posts: boolean;
  newEduDetails: boolean;
  edu = {
    universityName:"",
    qualification:"",
    yearOfCompletion:"",
    percentage:""
  }

  constructor(private router: Router,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      //General Info
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      interests: new FormControl('', [Validators.required]),
            //education details
      universityName: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required]),
      percentage: new FormControl('', [Validators.required]),
      yearOfCompletion: new FormControl('', [Validators.required]),
      
      //work experience
      designation: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      currentlyWorking: new FormControl('', [Validators.required]),
      //posts
      profileName: new FormControl('', [Validators.required]),
      profileImage: new FormControl('', [Validators.required]),
      dateOfPost: new FormControl('', [Validators.required]),
      postText: new FormControl('', [Validators.required]),
      postImage: new FormControl('', [Validators.required]),
      postVideo: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit() {
    this.generalInfo = false;
    this.educationDetail = false;
    this.workExperience = false;
    this.posts = false;
    this.newEduDetails=true;

    this.profileService.getUsers().subscribe((res) => {
      console.log(res);
      this.userObj = res;
    })
  }

  toggleGeneralInfo() {
    this.generalInfo = !this.generalInfo;
    this.educationDetail = false;
    this.workExperience = false;
    this.posts = false;

  }
  toggleEduDetails() {
    this.educationDetail = !this.educationDetail;
    this.generalInfo = false;
    this.workExperience = false;
    this.posts = false;
  }
   
  addToggleEdu () {
    this.newEduDetails=!this.newEduDetails;

  }
  toggleWorkExp() {
    this.workExperience = !this.workExperience;
    this.generalInfo = false;
    this.educationDetail = false;
    this.posts = false;

  }
  togglePosts() {
    this.posts = !this.posts;
    this.generalInfo = false;
    this.educationDetail = false;
    this.workExperience = false;
  }
  // goToProfileEditComponent(_id) {
  //   this.router.navigate(['/edit-profile/' + _id]);

  //   let id = this.activatedRoute.snapshot.paramMap.get('_id');
  //   this.profileService.getProfileById(id).subscribe((res) => {
  //     console.log(res);
  //     this.userObj = res;
  //   })
  // }

  addEduDetails() {
    this.userObj.educationDetails.push(this.edu);
    console.log(this.userObj);
    this.profileService.addEducationDetails(this.userObj).subscribe((res) => {
      console.log("Response Is: " + res)
    })
  }

  save() {
    this.profileService.updateProfileById(this.userObj._id, this.userObj)
      .subscribe((res) => {
        alert("Data Updated");
        this.router.navigate(['/profile']);
      })

  }
  cancel() {
    this.router.navigate(['/profile']);
  }
}

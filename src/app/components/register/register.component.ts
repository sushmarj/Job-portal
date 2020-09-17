import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any = [];
  myForm: FormGroup;

  loginObject = {
    email: '',
    password: ''
  };
  result: any;



  errorMessage: string = "";

  constructor(private registerService: RegisterService,

    private authSrervice: AuthService,
    private router: Router) {
    this.myForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    })
  }

  signIn() {
    this.authSrervice.signInUser(this.loginObject).subscribe((response) => {
      console.log(response);
      this.result = response;
      console.log("Token:" + this.result.token);


      if (this.result.success == true) {
        localStorage.setItem('token', this.result.token);
        this.router.navigate(['/home']);
      }
      else {
        this.errorMessage = "invalid username or password";
        this.router.navigate(['/login']);
      }

    })
  }

  addUserToServices(fname, lname, email, password) {
    this.registerService.addUser(fname, lname, email, password).subscribe(() => {
      alert("successful")
      this.router.navigate(['/home']);
    })
  }

  ngOnInit() {

  }

}

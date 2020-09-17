import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})



export class AuthService {
    serviceUrl = "http://localhost:3000/api/auth/";

    constructor(private router: Router, private http: HttpClient) { }
    signInUser(loginInfo: any) {
        return this.http.post(this.serviceUrl, loginInfo)
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logOutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/register'])
    }
}

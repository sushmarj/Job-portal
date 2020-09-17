import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { core } from '@angular/compiler';
import { Job } from '../viewmodels/job.viewmodel';
import { Company } from '../viewmodels/companies.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  toggle: boolean;
  serviceUrl = "http://localhost:3000/api/job/";
  serviceUrl1 = "http://localhost:3000/api/companies/"
  jobID: any = Math.random() * 100000;
  constructor(private http: HttpClient) {
    this.toggle = false;
  }

  onToggle() {
    this.toggle = !this.toggle;
    return this.toggle;
  }
  addJob(name, description, date, details, ldate, status) {
    let newJob = {
      jobId: this.jobID,
      jobName: name,
      jobDescription: description,
      datePosted: date,
      companyDetails: details,
      lastDate: ldate,
      status: status
    }

    return this.http.post(this.serviceUrl, newJob);
  }

  getJobById(): Observable<Job[]> {
    return this.http.get<Job[]>(this.serviceUrl);
  }

  getCompany() {
    return this.http.get(this.serviceUrl1)
  }

  addCompanyDetails(companyName, companyLocation, description, website, yearFounded, companySize) {
    alert("In Add Company Details Service");
    let newcompany = {
      companyName: companyName,
      companyLocation: companyLocation,
      description: description,
      website: website,
      yearFounded: yearFounded,
      companySize: companySize
    }
    console.log(newcompany);
    
    return this.http.post(this.serviceUrl1, newcompany);
  }

  getCompanyDetails(): Observable<Company[]> {
    return this.http.get<Company[]>(this.serviceUrl1);
  }
}

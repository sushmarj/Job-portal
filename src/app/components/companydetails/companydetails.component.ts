import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/viewmodels/companies.viewmodel';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  companyObject: Company[]=[];
  myForm:FormGroup;

  constructor(private jobService:JobService) {
    this.myForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    location:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
    description:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
    yearFounded:new FormControl('',[Validators.required,]),
    website:new FormControl('',[Validators.required,Validators.pattern("https?://.+")]),
    companysize:new FormControl('',[Validators.required,Validators.pattern("[0-9]+")])
    })
   }

  ngOnInit() {
    this.getCompaniesFromService();
  }
  getCompaniesFromService() {
    this.jobService.getCompanyDetails().subscribe((response) => {
      this.companyObject = response;
    });
  }

  addCompanyDetailsToService(companyName,companyLocation,description,website,yearFounded,companySize) {
    this.jobService.addCompanyDetails(companyName,companyLocation,description,website,yearFounded,companySize).subscribe((res)=>{
      alert("Comapny Added");
      this.getCompaniesFromService();
    })
  }
}

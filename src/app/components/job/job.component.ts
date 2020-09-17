import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/viewmodels/job.viewmodel';
//import { Job } from 'src';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  myForm: FormGroup;
  jobObject: any;
  detailsObj: any = {};
  constructor(private router: Router,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      ldate: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getJobFromService();
  }

  getJobFromService() {
    this.jobService.getCompany().subscribe((res) => {
      this.jobObject = res

    })
  }

  addJobToService(name, description, date, details, ldate, status) {
    for (let i = 0; i < this.jobObject.length; i++) {
      if (details === this.jobObject[i].companyName) {
        this.detailsObj = this.jobObject[i]; //putting the details of the company in detailobj by matching it with name here and from html
        console.log(this.detailsObj);
        break;
      }
    }


    this.jobService.addJob(name, description, date, this.detailsObj, ldate, status).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/jobs']);
    })

  }



  cancel() {
    this.router.navigate(['/home']);
  }

}

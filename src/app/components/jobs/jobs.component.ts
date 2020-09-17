import { Component, OnInit,TemplateRef } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  modalRef: BsModalRef;
  jobs:any=[];
  jobs12:any=[];
  toggle: boolean = false
  constructor(private jobService:JobsService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  } 
  
  ngOnInit() {

    this.getJobsFromService();
  }
  
  getJobsFromService(){
    this.jobService.getJobs().subscribe((response)=>{
      this.jobs=response;
    });
  }
  
	searchByName(name) {
    for(let i = 0; i < this.jobs.length; i++) {
      if (name == this.jobs[i].jobName) {
        console.log(this.jobs[i].jobName)
        this.jobs12[0] = this.jobs[i]
        console.log(this.jobs12[0])
        this.toggle = true
        break;
      } 
    }
    
  }

  hideSearch() {
    this.toggle = false;
    this.jobs12 = [];
  }
}

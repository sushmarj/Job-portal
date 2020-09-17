import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  constructor(private jobService: WorkService) {}
  toggle() {
    this.jobService.onToggle();
  }

  ngOnInit() {}
  
}

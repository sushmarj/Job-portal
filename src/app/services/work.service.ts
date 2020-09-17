import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  toggle: boolean;
  constructor() {
    this.toggle = false;
  }

  onToggle() {
    this.toggle = !this.toggle;
  }
}

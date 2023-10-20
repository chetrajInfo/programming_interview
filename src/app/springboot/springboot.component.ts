import { Component } from '@angular/core';

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent {
  isExpanded = false;

  toggleList() {
    this.isExpanded = !this.isExpanded;
  }


  isDetailsOpen = false;

  toggleDetails() {
    this.isDetailsOpen = !this.isDetailsOpen;
  }
}

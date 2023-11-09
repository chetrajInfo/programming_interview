import { Component } from '@angular/core';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent {

  isExpanded = false;

  toggleList() {
    this.isExpanded = !this.isExpanded;
  }


  isDetailsOpen = false;

  toggleDetails() {
    this.isDetailsOpen = !this.isDetailsOpen;
  }

}

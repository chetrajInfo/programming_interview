import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-springboot2yrs',
  templateUrl: './springboot2yrs.component.html',
  styleUrls: ['./springboot2yrs.component.css']
})
export class Springboot2yrsComponent implements OnInit {
  faqs: { question: string, answer: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFaqs().subscribe(data => {
      for (const item of data) {
        let question = item[`q${data.indexOf(item) + 1}`];
        let answer = item[`a${data.indexOf(item) + 1}`];
        if (question && answer) {
          answer = answer.replace(/\n/g, '<br>');  // Replacing the newline characters
          this.faqs.push({ question, answer });
        }
      }
    });
  }
  
}

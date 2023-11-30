import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-corejava4yrs',
  templateUrl: './corejava4yrs.component.html',
  styleUrls: ['./corejava4yrs.component.css']
})
export class Corejava4yrsComponent implements OnInit {

  searchInput: string = '';
  errorMessage:string='';
  
  faqs: { question: string, answer: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCoreJavaFourYrs().subscribe(data => {
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
  
  goToQuestion(): void {
    const questionElement = document.getElementById('question-' + this.searchInput);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth' });
        this.errorMessage ='';
    }else{
      this.errorMessage = "Question "+this.searchInput+" Does Not Exist.";
    }
    
  }

}

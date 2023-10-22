import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-springboot3yrs',
  templateUrl: './springboot3yrs.component.html',
  styleUrls: ['./springboot3yrs.component.css']
})
export class Springboot3yrsComponent implements OnInit {


  searchInput:string =''
  errorMessage:string =''

  constructor(private dataService: DataService){}
  faqs: {question : string, answer:string}[]=[]

  ngOnInit(): void {
    this.dataService.getSpringTwoYrs().subscribe(data => {
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

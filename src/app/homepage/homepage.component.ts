import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  links =[
    {url:'https://www.indeed.com/career-advice/career-development/hard-skills' , title: 'Hard Skill That Set Your Aspect.'},
    {url:'https://theinterviewguys.com/behavioral-interview-questions-and-answers-101/', title: 'Behavorial Interview Question.'},
    {url:'https://eddy.com/hr-encyclopedia/role-specific-training/#:~:text=Role-specific%20training%20is%20a%20training%20plan%20geared%20specifically,their%20role%20responsibilities%20to%20reach%20their%20full%20potential.', title: 'Role Specific Knowledge and Company Research.'},
    {url:'https://hbr.org/2022/05/38-smart-questions-to-ask-in-a-job-interview', title: 'Ask Meaningful Question.'},
    {url:'https://theinterviewguys.com/mock-interview/', title: 'Prepare always with Mock Interview.'}
  ]
  
  constructor(){}

  ngOnInit(): void {
    
  }

}

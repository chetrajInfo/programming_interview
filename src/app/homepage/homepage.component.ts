import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  links =[
    {url:'', title: 'Hard Skill That Set Your Aspect.'},
    {url:'', title: 'Behavorial Interview Question.'},
    {url:'', title: 'Role Specific Knowledge and Company Research.'},
    {url:'', title: 'Ask Meaningful Question.'},
    {url:'', title: 'repare always with Mock Interview.'}
  ]
  
  constructor(){}

  ngOnInit(): void {
    
  }

}

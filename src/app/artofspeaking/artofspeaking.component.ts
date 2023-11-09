import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artofspeaking',
  templateUrl: './artofspeaking.component.html',
  styleUrls: ['./artofspeaking.component.css']
})
export class ArtofspeakingComponent implements OnInit {

  constructor(private dataService: DataService){  }

  topics: { head:string, content:string, scenario:string}[] = []


  ngOnInit(): void {
    this.dataService.getArtOfSpeaking().subscribe(data => {
      for(const item of data){
        let head = item[`h${data.indexOf(item) + 1}`];
        let content = item[`c${data.indexOf(item) + 1}`];
        let scenario = item[`s${data.indexOf(item) + 1}`];
  
        if(head && content && scenario){
          content = content.replace(/\n/g, '<br>');  // Replacing the newline characters
          scenario = scenario.replace(/\n/g,'<br>');
          this.topics.push({head, content, scenario});
        }
      }
    });
  }
  
  

  
}

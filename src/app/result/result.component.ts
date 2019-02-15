import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    let messages = this.data.getResults();
    console.log(messages);
    // this.data.getResults().forEach(user => {
    //   console.log(user);
    // });
  }

}

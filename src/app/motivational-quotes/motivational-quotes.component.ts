import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.css']
})
export class MotivationalQuotesComponent implements OnInit {
   quote1 = "passion is the beginning of success"

  constructor() { }

  ngOnInit() {
  }

}

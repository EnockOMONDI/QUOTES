import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.css']
})
export class MotivationalQuotesComponent implements OnInit {
   quote1s = ["passion is the beginning of success","today is your day ","tommorow is bright"]
changehero(){
  this.quote1 = this.inputQuote1
  inputQuote1 = "null";
  this.inputQuote = null;
}


  constructor() { }

  ngOnInit() {
  }

}

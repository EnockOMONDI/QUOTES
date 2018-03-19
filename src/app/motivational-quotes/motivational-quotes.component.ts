import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.css']
})
export class MotivationalQuotesComponent implements OnInit {
   quote1s = ["passion is the beginning of success","today is your day ","tommorow is bright"]
   Adding = false;
   inputQuote = null;
addHero(){
  this.quote1s.push(this.inputQuote)
  this.inputQuote = null;
  this.Adding=false
}
  Addmore(){
    this.Adding = !this.Adding

  }

  constructor() { }

  ngOnInit() {
  }

}

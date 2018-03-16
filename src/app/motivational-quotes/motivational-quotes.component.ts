import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.css']
})
export class MotivationalQuotesComponent implements OnInit {
   quote1 = "passion is the beginning of success"
changehero(){
  this.quote1 = this.inputQuote1;
  inputQuote1 = "null";
}


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quote(1,'Passion is the beginning of success.','Enock Omondi',new Date(2018,3,14)),
    new Quote(2,'Success is not final, failure is not fatal: it is the courage to continue that counts','churchill',new Date(2018,3,14) ),
    new Quote(3,'The future belongs to those who prepare for it today.','Malcom X',new Date(2018,1,12)),


  ]

  removeQuote(isRemove,index){
    if(isRemove){
       let toRemove=confirm(`Are you sure you want to delete quote by ${this.quotes[index].name}`)

     if(toRemove){
      this.quotes.splice(index,1);
    }
  }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }




  constructor() { }

  ngOnInit() {
  }

}

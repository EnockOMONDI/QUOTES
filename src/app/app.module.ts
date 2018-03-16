import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MotivationalQuotesComponent } from './motivational-quotes/motivational-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    MotivationalQuotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLibModule } from "my-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule.forRoot({url:'https://splunk',token:'splunk-token-to-use'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

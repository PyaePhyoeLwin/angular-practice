import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { SquareModule } from '../pipe/square.module';
// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SquareModule],
  declarations: [AppComponent, HighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuartzCronModule } from 'ng-cron';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, QuartzCronModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

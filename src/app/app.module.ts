import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LendingComponent } from './lending/components/lending.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents, LendingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ButtonModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

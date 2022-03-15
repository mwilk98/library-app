import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LendingComponent } from './lending/components/lending.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentFormAddComponent } from './students/ui/forms/student-form-add/student-form-add.component';
import { StudentFormEditComponent } from './students/ui/forms/student-form-edit/student-form-edit.component';
import { BookFormAddComponent } from './books/ui/forms/form-add/book-form-add.component';
import { BookFormEditComponent } from './books/ui/forms/form-edit/book-form-edit.component';
import { LendingFormEditComponent } from './lending/ui/forms/lending-form-edit/lending-form-edit.component';
import { LendingFormAddComponent } from './lending/ui/forms/lending-form-add/lending-form-add.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
                  AppComponent,
                  HeaderComponent, 
                  routingComponents, 
                  LendingComponent, 
                  StudentFormAddComponent, 
                  StudentFormEditComponent, 
                  BookFormAddComponent, 
                  BookFormEditComponent, 
                  LendingFormEditComponent, 
                  LendingFormAddComponent
                ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ButtonModule, TableModule, ConfirmDialogModule, BrowserAnimationsModule, DialogModule],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LendingComponent } from './lending/components/lending.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentFormAddComponent } from './forms/student-form-add/student-form-add.component';
import { StudentFormEditComponent } from './forms/student-form-edit/student-form-edit.component';
import { BookFormAddComponent } from './forms/book-form-add/book-form-add.component';
import { BookFormEditComponent } from './forms/book-form-edit/book-form-edit.component';
import { LendingFormEditComponent } from './forms/lending-form-edit/lending-form-edit.component';
import { LendingFormAddComponent } from './forms/lending-form-add/lending-form-add.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import { MessagesComponent } from './messages/messages.component';
import { TableBookComponent } from './table/table-book.component';
import { TableStudentComponent } from './table/table-student.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { TableLendingComponent } from './table/table-lending.component';


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
    LendingFormAddComponent,
    MessagesComponent,
    TableBookComponent,
    TableStudentComponent,
    TableLendingComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ButtonModule, 
    TableModule, 
    ConfirmDialogModule, 
    BrowserAnimationsModule,
    DialogModule,
    CascadeSelectModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

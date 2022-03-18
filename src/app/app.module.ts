import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LendingComponent } from './lending/ui/lending.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentAddComponent } from './forms/student-form/student-add.component';
import { StudentEditComponent} from './forms/student-form/student-edit.component';
import { BookAddComponent } from './books/util/add/controller/book-add.component';
import { BookEditComponent } from './books/util/edit/controller/book-edit.component';
import { LendingEditComponent } from './forms/lending-form/lending-edit.component';
import { LendingAddComponent  } from './forms/lending-form/lending-add.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { MessagesComponent } from './messages/messages.component';
import { TableStudentComponent } from './table/table-student.component';
import { TableLendingComponent } from './table/table-lending.component';
import { BookFormComponent } from './books/util/ui/book-form.component';
import { LendingFormComponent } from './forms/lending-form/lending-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { UiTableComponent } from './table/ui/ui-table.component'
import { TableComponent } from './table/controller/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    routingComponents, 
    LendingComponent, 
    StudentAddComponent, 
    StudentEditComponent, 
    BookAddComponent, 
    BookEditComponent, 
    LendingEditComponent, 
    LendingAddComponent,
    MessagesComponent,
    TableStudentComponent,
    TableLendingComponent,
    BookFormComponent,
    LendingFormComponent,
    StudentFormComponent,
    UiTableComponent,
    TableComponent
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
    DropdownModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

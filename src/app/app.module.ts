import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentAddComponent } from './students/utils/add/student-add.component';
import { StudentEditComponent} from './students/utils/edit/student-edit.component';
import { BookAddComponent } from './books/util/add/controller/book-add.component';
import { BookEditComponent } from './books/util/edit/controller/book-edit.component';
import { LendingEditComponent } from './lending/util/edit/lending-edit.component';
import { LendingAddComponent  } from './lending/util/add/lending-add.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { MessagesComponent } from './messages/ui/messages.component';
import { TableStudentComponent } from './table/table-student.component';
import { TableLendingComponent } from './table/table-lending.component';
import { BookFormComponent } from './books/util/ui/book-form.component';
import { LendingFormComponent } from './lending/util/ui/lending-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { StudentFormComponent } from './students/utils/ui/student-form.component';
import { UiTableComponent } from './table/ui/ui-table.component'
import { TableComponent } from './table/controller/table.component';
import { LendingComponent } from './lending/grid/controller/lending.component';


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

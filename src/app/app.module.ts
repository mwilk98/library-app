import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './feat-header/header.component';
import { LendingComponent } from './feat-lending/grid/lending.component';
import { StudentAddComponent } from './feat-students/utils/add/student-add.component';
import { StudentEditComponent } from './feat-students/utils/edit/student-edit.component';
import { BookAddComponent } from './feat-books/util/add/book-add.component';
import { BookEditComponent } from './feat-books/util/edit/book-edit.component';
import { LendingEditComponent } from './feat-lending/util/edit/lending-edit.component';
import { LendingAddComponent } from './feat-lending/util/add/lending-add.component';
import { MessagesComponent } from './feat-messages/ui/messages.component';
import { BookFormComponent } from './feat-books/util/ui/book-form.component';
import { LendingFormComponent } from './feat-lending/util/ui/lending-form.component';
import { StudentFormComponent } from './feat-students/utils/ui/student-form.component';
import { UiTableComponent } from './feat-table/ui/ui-table.component';
import { FrontPageComponent } from './feat-front-page/grid/controller/front-page.component';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { UiFrontPageComponent } from './feat-front-page/ui/ui-front-page.component';
import { TransformPipePipe } from './shared/utils/transform-pipe.pipe';

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
    BookFormComponent,
    LendingFormComponent,
    StudentFormComponent,
    UiTableComponent,
    FrontPageComponent,
    UiFrontPageComponent,
    TransformPipePipe
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
    DropdownModule,
    ChartModule,
    MessageModule,
    MessagesModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LendingComponent } from './lending/components/lending.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentFormAddComponent } from './students/ui/forms/form-add/student-form-add.component';
import { StudentFormEditComponent } from './students/ui/forms/form-edit/student-form-edit.component';
import { BookFormAddComponent } from './books/ui/forms/form-add/book-form-add.component';
import { BookFormEditComponent } from './books/ui/forms/form-edit/book-form-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents, LendingComponent, StudentFormAddComponent, StudentFormEditComponent, BookFormAddComponent, BookFormEditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ButtonModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

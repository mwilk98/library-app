import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// eslint-disable-next-line import/no-unresolved
import { AppRoutingModule } from './app-routing.module';
// eslint-disable-next-line import/no-unresolved
import { AppComponent } from './app.component';
// eslint-disable-next-line import/no-unresolved
import { StudentsComponent } from './students/students.component';
// eslint-disable-next-line import/no-unresolved
import { BooksComponent } from './books/books.component';
// eslint-disable-next-line import/no-unresolved
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    BooksComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }

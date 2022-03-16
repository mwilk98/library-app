import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/components/books.component';
import { StudentFormAddComponent } from './forms/student-form-add/student-form-add.component';
import { StudentFormEditComponent } from './forms/student-form-edit/student-form-edit.component';
import { LendingComponent } from './lending/components/lending.component';
import { StudentsComponent } from './students/components/students.component';
import { BookFormAddComponent } from './forms/book-form-add/book-form-add.component';
import { BookFormEditComponent } from './forms/book-form-edit/book-form-edit.component';
import { LendingFormAddComponent } from './forms/lending-form-add/lending-form-add.component';
import { LendingFormEditComponent } from './forms/lending-form-edit/lending-form-edit.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lendings', component: LendingComponent },
  { path: 'add-student', component: StudentFormAddComponent },
  { path: 'edit-student/:id', component: StudentFormEditComponent },
  { path: 'add-book', component: BookFormAddComponent },
  { path: 'edit-book/:id', component: BookFormEditComponent },
  { path: 'add-lending', component: LendingFormAddComponent },
  { path: 'edit-lending/:id', component: LendingFormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [BooksComponent, StudentsComponent, LendingComponent];

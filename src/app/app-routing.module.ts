import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/ui/books.component';
import { StudentFormAddComponent } from './forms/student-form-add/student-form-add.component';
import { StudentFormEditComponent } from './forms/student-form-edit/student-form-edit.component';
import { LendingComponent } from './lending/ui/lending.component';
import { StudentsComponent } from './students/ui/students.component';
import { BookAddComponent } from './forms/book-form/book-add.component';
import { BookEditComponent } from './forms/book-form/book-edit.component';
import { LendingAddComponent } from './forms/lending-form/lending-add.component';
import { LendingEditComponent } from './forms/lending-form/lending-edit.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lendings', component: LendingComponent },
  { path: 'add-student', component: StudentFormAddComponent },
  { path: 'edit-student/:id', component: StudentFormEditComponent },
  { path: 'add-book', component: BookAddComponent },
  { path: 'edit-book/:id', component: BookEditComponent },
  { path: 'add-lending', component: LendingAddComponent },
  { path: 'edit-lending/:id', component: LendingEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [BooksComponent, StudentsComponent, LendingComponent];

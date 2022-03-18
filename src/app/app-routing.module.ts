import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/grid/controller/books.component';
import { StudentAddComponent } from './forms/student-form/student-add.component';
import { StudentEditComponent } from './forms/student-form/student-edit.component';
import { LendingComponent } from './lending/ui/lending.component';
import { StudentsComponent } from './students/ui/students.component';
import { BookAddComponent } from './books/util/add/controller/book-add.component';
import { BookEditComponent } from './books/util/edit/controller/book-edit.component';
import { LendingAddComponent } from './forms/lending-form/lending-add.component';
import { LendingEditComponent } from './forms/lending-form/lending-edit.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lendings', component: LendingComponent },
  { path: 'add-student', component: StudentAddComponent },
  { path: 'edit-student/:id', component: StudentEditComponent },
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

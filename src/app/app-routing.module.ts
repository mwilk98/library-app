import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './feat-books/grid/controller/books.component';
import { BookAddComponent } from './feat-books/util/add/controller/book-add.component';
import { BookEditComponent } from './feat-books/util/edit/controller/book-edit.component';
import { LendingComponent } from './feat-lending/grid/controller/lending.component';
import { LendingAddComponent } from './feat-lending/util/add/lending-add.component';
import { LendingEditComponent } from './feat-lending/util/edit/lending-edit.component';
import { StudentsComponent } from './feat-students/grid/controller/students.component';
import { StudentAddComponent } from './feat-students/utils/add/student-add.component';
import { StudentEditComponent } from './feat-students/utils/edit/student-edit.component';


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

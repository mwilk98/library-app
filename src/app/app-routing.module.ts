import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/components/books.component';
import { LendingComponent } from './lending/components/lending.component';
import { StudentsComponent } from './students/components/students.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lendings', component: LendingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [BooksComponent, StudentsComponent, LendingComponent];

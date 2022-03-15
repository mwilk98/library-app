import { Component, OnInit } from '@angular/core';
import { LendingService } from '../services/lending.service';
import { Lending } from '../domain-model/lending.model';
import { Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { StudentService } from 'src/app/students/services/students.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/lending.component.html',
})
export class LendingComponent implements OnInit{
  constructor(
    readonly lendingSrv: LendingService,
    private bookSrv: BookService,
    readonly studentSrv: StudentService,
    private _router: Router
  ) {}

  lendings: Array<Lending> = [];
  students: Array<Student> = [];
  books: Array<Book> = [];

  ngOnInit(): void {
    this.lendings = this.lendingSrv.getLendings();
    this.students = this.studentSrv.getStudents();    
    this.books = this.bookSrv.getBooks();  
  }

  deleteLending(lendingId: string) {
    this.lendingSrv.deleteLending(lendingId);
    this.lendings = this.lendingSrv.getLendings();
  }

  editLending(lendingId: string) {
    this._router.navigate(['/edit-lending', lendingId])
  }

}

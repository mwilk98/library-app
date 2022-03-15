import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { LendingService } from 'src/app/lending/services/lending.service';
import { LendingValidatorService } from 'src/app/lending/services/validation/lendings-validator.service';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';

type NewType = Book;

@Component({
  selector: 'app-form-add',
  templateUrl: './lending-form-add.component.html'
})
export class LendingFormAddComponent implements OnInit {

  constructor(readonly lendingSrv: LendingService,
    readonly lendingValidationSrv: LendingValidatorService,
    private bookSrv: BookService,
    private studentSrv: StudentService,
    private _router: Router
) {}

idError: boolean = true;
id: string = '';
lending!: Lending;
student!: Student;
book!: Book;
date: string = '';
bookStatus: string = '';
books: Array<Book> = [];
students: Array<Student> = [];

ngOnInit(): void {
  this.books = this.bookSrv.getBooks();  
  this.students = this.studentSrv.getStudents();  
}

onSubmit(data: Lending): void {
  this.idError = this.lendingValidationSrv.idValidation(data.id);

  if(this.idError) {
    this.lendingSrv.addLending(data);
    this._router.navigate(['/lendings'])
  }    
}

}


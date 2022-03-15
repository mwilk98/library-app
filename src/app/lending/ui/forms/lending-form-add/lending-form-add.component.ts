import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
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
    private confirmationService: ConfirmationService,
    private _router: Router
) {}

idError: boolean = true;
bookIdError: boolean = true;
studentIdError: boolean = true;
dateError: boolean = true;
books: Array<Book> = [];
students: Array<Student> = [];

ngOnInit(): void {
  this.books = this.bookSrv.getBooks();  
  this.students = this.studentSrv.getStudents();  
}

onSubmit(data: Lending): void {
  this.idError = this.lendingValidationSrv.idValidation(data.id);
  this.bookIdError =this.lendingValidationSrv.emptyStringValidation(data.idBook);
  this.studentIdError = this.lendingValidationSrv.emptyStringValidation(data.idStudent);
  this.dateError = this.lendingValidationSrv.dateValidation(data.lendingDate);

  if(this.idError && this.bookIdError && this.studentIdError && this.dateError) {
    this.lendingSrv.addLending(data);
    this.confirmationService.confirm({
        message: `Dodano wypożyczenie`,
        accept: () => {
          this._router.navigate(['/lendings'])
        }
    }); 
  }    
}

}


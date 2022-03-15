import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { LendingService } from 'src/app/lending/services/lending.service';
import { LendingValidatorService } from 'src/app/lending/services/validation/lendings-validator.service';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './lending-form-edit.component.html',
})
export class LendingFormEditComponent implements OnInit {

  constructor(readonly lendingSrv: LendingService,
              readonly lendingValidationSrv: LendingValidatorService,
              private bookSrv: BookService,
              private studentSrv: StudentService,
              private confirmationService: ConfirmationService,
              private _route: ActivatedRoute,
              private _router: Router,
              @Inject(LOCALE_ID) private locale: string
  ) {}

  id: string = '';
  lending!: Lending;
  student!: Student;
  book!: Book;
  books: Array<Book> = [];
  students: Array<Student> = [];
  date: string = '';
  bookStatus: string = '';
  idError: boolean = true;
  bookIdError: boolean = true;
  studentIdError: boolean = true;
  dateError: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.books = this.bookSrv.getBooks();  
    this.students = this.studentSrv.getStudents();   
    this.lending = this.lendingSrv.getLending(this.id);
    this.date = formatDate(this.lending.lendingDate,'yyyy-MM-dd',this.locale);
    this.student = this.studentSrv.getStudent(this.lending.idStudent);
    this.book = this.bookSrv.getBook(this.lending.idBook);
    this.bookStatus = this.lendingSrv.bookStatusName(this.lending.status);
  }

  onSubmit(data: Lending): void {
    //this.idError = this.lendingValidationSrv.idValidation(data.id);
    this.bookIdError =this.lendingValidationSrv.emptyStringValidation(data.idBook);
    this.studentIdError = this.lendingValidationSrv.emptyStringValidation(data.idStudent);
    this.dateError = this.lendingValidationSrv.dateValidation(data.lendingDate);

    if(this.idError && this.bookIdError && this.studentIdError && this.dateError) {
      this.lendingSrv.updateLending(data.id,data);
      this.confirmationService.confirm({
        message: `Zaktualizowano wypożyczenie`,
        accept: () => {
          this._router.navigate(['/lendings'])
        }
    }); 
    }    
  }

}

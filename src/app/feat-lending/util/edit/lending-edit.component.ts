import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/feat-books/model/book.model';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { Student } from 'src/app/feat-students/model/student.model';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { LendingError } from '../../model/lending-validate.model';
import { Lending } from '../../model/lending.model';
import { LendingFindService } from '../../services/finder/lending-find.service';
import { LendingUtilityService } from '../../services/utils/lending-utility.service';
import { LendingValidatorService } from '../../services/validation/lendings-validator.service';


@Component({
  selector: 'app-lending-edit',
  templateUrl: './lending-edit.component.html',
})
export class LendingEditComponent implements OnInit {
  lendingError: LendingError;
  constructor(
    private readonly lendingFindSrv: LendingFindService,
    private readonly lendingUtilSrv: LendingUtilityService,
    private readonly validationSrv: LendingValidatorService,
    private readonly bookFindSrv: BookFindService,
    private readonly studentFindSrv: StudentFindService,
    private readonly confirmationService: ConfirmationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    @Inject(LOCALE_ID) private readonly locale: string
  ) {
    this.lendingError = {
      idError: true,
      idBookError: true,
      idStudentError: true,
      dateError: true,
    };
  }

  id: string = '';
  lending!: Lending;
  student!: Student;
  book!: Book;
  books: Array<Book> = [];
  students: Array<Student> = [];
  date: string = '';
  bookStatus: string = '';
  validate: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.books = this.bookFindSrv.getBooks();
    this.students = this.studentFindSrv.getStudents();
    this.lending = this.lendingFindSrv.getLending(this.id);
    this.date = formatDate(this.lending.lendingDate, 'yyyy-MM-dd', this.locale);
    this.student = this.studentFindSrv.getStudent(this.lending.idStudent);
    this.book = this.bookFindSrv.getBook(this.lending.idBook);
    this.bookStatus = this.lendingUtilSrv.bookStatusName(this.lending.status);
  }

  onSubmit(data: Lending): void {
    this.lendingError.idBookError  = this.validationSrv.emptyStringValidation(data.idBook);
    this.lendingError.idStudentError = this.validationSrv.emptyStringValidation(data.idStudent);
    this.lendingError.dateError = this.validationSrv.dateValidation(data.lendingDate);

    if (
      this.lendingError.idError &&
      this.lendingError.idBookError &&
      this.lendingError.idStudentError &&
      this.lendingError.dateError
      ) {
        console.log('error');
        
      this.lendingUtilSrv.updateLending(data.id, data);
      this.confirmationService.confirm({
        message: `Zaktualizowano wypożyczenie`,
        accept: () => {
          this._router.navigate(['/lendings']);
        },
      });
    }
  }
}

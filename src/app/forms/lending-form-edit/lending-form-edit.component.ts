import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookFindService } from 'src/app/books/services/finder/book-find.service';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { LendingFindService } from 'src/app/lending/services/finder/lending-find.service';
import { LendingUtilityService } from 'src/app/lending/services/utils/lending-utility.service';
import { LendingValidatorService } from 'src/app/lending/services/validation/lendings-validator.service';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentFindService } from 'src/app/students/services/finder/student-find.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './lending-form-edit.component.html',
})
export class LendingFormEditComponent implements OnInit {
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
  ) {}

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
    this.validate = this.validationSrv.emptyStringValidation(data.idBook);
    this.validate = this.validationSrv.emptyStringValidation(data.idStudent);
    this.validate = this.validationSrv.dateValidation(data.lendingDate);

    if (this.validate) {
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

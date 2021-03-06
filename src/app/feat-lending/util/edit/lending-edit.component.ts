import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BaseBookModel } from 'src/app/feat-books/model/book.model';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { BaseStudentModel } from 'src/app/feat-students/model/student.model';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { LendingErrorModel } from '../../model/lending-validate.model';
import { BaseLendingModel } from '../../model/lending.model';
import { LendingFindService } from '../../services/finder/lending-find.service';
import { LendingUtilityService } from '../../services/utils/lending-utility.service';
import { LendingValidatorService } from '../../services/validation/lendings-validator.service';


@Component({
  selector: 'app-lending-edit',
  templateUrl: './lending-edit.component.html',
})
export class LendingEditComponent implements OnInit {
  lendingError: LendingErrorModel;
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
  lending!: BaseLendingModel;
  student!: BaseStudentModel;
  book!: BaseBookModel;
  books: Array<BaseBookModel> = [];
  students: Array<BaseStudentModel> = [];
  date: string = '';
  bookStatus: string = '';
  validate: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    //this.bookFindSrv.getBooks().subscribe(bookList => this.books = Object.values(bookList));
    //this.studentFindSrv.getStudents().subscribe(bookList => this.students = Object.values(bookList));
    this.lending = this.lendingFindSrv.getLending(this.id);
    this.date = formatDate(this.lending.lendingDate, 'yyyy-MM-dd', this.locale);
    this.student = this.studentFindSrv.getStudent(this.lending.idStudent);
    this.book = this.bookFindSrv.getBook(this.lending.idBook);
  }

  onSubmit(data: BaseLendingModel): void {
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
        message: `Zaktualizowano wypo??yczenie`,
        accept: () => {
          this._router.navigate(['/lendings']);
        },
      });
    }
  }
}

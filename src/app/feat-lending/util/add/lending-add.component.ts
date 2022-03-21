import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/feat-books/model/book.model';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { Student } from 'src/app/feat-students/model/student.model';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { LendingError } from '../../model/lending-validate.model';
import { Lending } from '../../model/lending.model';
import { LendingUtilityService } from '../../services/utils/lending-utility.service';
import { LendingValidatorService } from '../../services/validation/lendings-validator.service';


@Component({
  selector: 'app-add-lending',
  templateUrl: './lending-add.component.html',
})
export class LendingAddComponent implements OnInit {
  lending: Lending;
  lendingError: LendingError;
  constructor(
    private readonly lendingUtilSrv: LendingUtilityService,
    private readonly validationSrv: LendingValidatorService,
    private readonly bookFindSrv: BookFindService,
    private readonly studentFindSrv: StudentFindService,
    private readonly confirmationService: ConfirmationService,
    private readonly _router: Router
  ) {
    this.lending = {
      id: '',
      idBook: '',
      idStudent: '',
      lendingDate: new Date(),
      status: true,
    };
    this.lendingError = {
      idError: true,
      idBookError: true,
      idStudentError: true,
      dateError: true,
    };
  }

  books: Array<Book> = [];
  students: Array<Student> = [];
  validate: boolean = true;

  ngOnInit(): void {
    this.bookFindSrv.getBooks().subscribe(bookList => this.books = Object.values(bookList));
    this.studentFindSrv.getStudents().subscribe(bookList => this.students = Object.values(bookList));
  }

  onSubmit(data: Lending): void {
    this.lendingError.idError = this.validationSrv.idValidation(data.id);
    this.lendingError.idError = this.validationSrv.idUniqueValidation(data.id);
    this.lendingError.idBookError = this.validationSrv.emptyStringValidation(data.idBook);
    this.lendingError.idStudentError = this.validationSrv.emptyStringValidation(data.idStudent);
    this.lendingError.dateError = this.validationSrv.dateValidation(data.lendingDate);

    if (
      this.lendingError.idError &&
      this.lendingError.idBookError &&
      this.lendingError.idStudentError &&
      this.lendingError.dateError
      ) {
      this.lendingUtilSrv.addLending(data);
      this.confirmationService.confirm({
        message: `Dodano wypożyczenie`,
        accept: () => {
          this._router.navigate(['/lendings']);
        },
      });
    }
  }
}

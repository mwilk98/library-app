import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookFindService } from 'src/app/books/services/finder/book-find.service';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { LendingUtilityService } from 'src/app/lending/services/utils/lending-utility.service';
import { LendingValidatorService } from 'src/app/lending/services/validation/lendings-validator.service';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentFindService } from 'src/app/students/services/finder/student-find.service';

type NewType = Book;

@Component({
  selector: 'app-form-add',
  templateUrl: './lending-form-add.component.html',
})
export class LendingFormAddComponent implements OnInit {
  constructor(
    private readonly lendingUtilSrv: LendingUtilityService,
    private readonly validationSrv: LendingValidatorService,
    private readonly bookFindSrv: BookFindService,
    private readonly studentFindSrv: StudentFindService,
    private readonly confirmationService: ConfirmationService,
    private readonly _router: Router
  ) {}

  books: Array<Book> = [];
  students: Array<Student> = [];
  validate: boolean = true;

  ngOnInit(): void {
    this.books = this.bookFindSrv.getBooks();
    this.students = this.studentFindSrv.getStudents();
  }

  onSubmit(data: Lending): void {
    this.validate = this.validationSrv.idValidation(data.id);
    this.validate = this.validationSrv.emptyStringValidation(data.idBook);
    this.validate = this.validationSrv.emptyStringValidation(data.idStudent);
    this.validate = this.validationSrv.dateValidation(data.lendingDate);

    if (this.validate) {
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

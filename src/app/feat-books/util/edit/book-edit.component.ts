import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BookErrorModel } from 'src/app/feat-books/model/book-validate.model';
import { BaseBookModel } from 'src/app/feat-books/model/book.model';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { BookUtilityService } from 'src/app/feat-books/services/utils/book-utility.service';
import { BookValidatorService } from 'src/app/feat-books/services/validation/book-validator.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: 'book-edit.component.html',
})
export class BookEditComponent implements OnInit {
  bookError: BookErrorModel;
  
  constructor(
    private readonly findSrv: BookFindService,
    private readonly utilSrv: BookUtilityService,
    private readonly validateSrv: BookValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    @Inject(LOCALE_ID) private readonly locale: string
  ) {
    this.bookError = { idError: true, titleError: true, authorError: true, typeError: true, dateError: true };
  }

  id: string = '';
  date: string = '';
  book!: BaseBookModel;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.book = this.findSrv.getBook(this.id);
    this.date = formatDate(this.book.releaseDate, 'yyyy-MM-dd', this.locale);
  }

  onSubmit(data: BaseBookModel): void {
    this.bookError.idError = this.validateSrv.idValidation(data.id);
    this.bookError.titleError = this.validateSrv.dataValidation(data.title);
    this.bookError.authorError = this.validateSrv.dataValidation(data.author);
    this.bookError.typeError = this.validateSrv.dataValidation(data.type);
    this.bookError.dateError = this.validateSrv.dateValidation(data.releaseDate);
    if (
      this.bookError.idError && this.bookError.titleError && this.bookError.authorError &&
      this.bookError.typeError && this.bookError.dateError
    ) {
      this.utilSrv.updateBook(this.id, data);
      this.confirmationSrv.confirm({
        message: `Zaktualizowano ksi????k??`,
        accept: () => {
          this._router.navigate(['/books']);
        },
      });
    }
  }
}

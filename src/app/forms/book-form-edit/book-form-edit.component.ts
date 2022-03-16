import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookFindService } from 'src/app/books/services/finder/book-find.service';
import { BookUtilityService } from 'src/app/books/services/utils/book-utility.service';
import { BookValidatorService } from 'src/app/books/services/validation/book-validator.service';

@Component({
  selector: 'app-book-form-edit',
  templateUrl: './book-form-edit.component.html',
})
export class BookFormEditComponent implements OnInit {
  constructor(
    private readonly findSrv: BookFindService,
    private readonly utilSrv: BookUtilityService,
    private readonly validateSrv: BookValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    @Inject(LOCALE_ID) private readonly locale: string
  ) {}

  id: string = '';
  date: string = '';
  book!: Book;
  validate: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.book = this.findSrv.getBook(this.id);
    this.date = formatDate(this.book.releaseDate, 'yyyy-MM-dd', this.locale);
  }

  onSubmit(data: Book): void {
    this.validate = this.validateSrv.dataValidation(data.title);
    this.validate = this.validateSrv.dataValidation(data.author);
    this.validate = this.validateSrv.dataValidation(data.type);
    this.validate = this.validateSrv.dateValidation(data.releaseDate);

    if (this.validate) {
      this.utilSrv.updateBook(data.id, data);
      this.confirmationSrv.confirm({
        message: `Zaktualizowano książkę`,
        accept: () => {
          this._router.navigate(['/books']);
        },
      });
    }
  }
}

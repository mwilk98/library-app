import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BookErrorModel } from 'src/app/feat-books/model/book-validate.model';
import { BaseBookModel } from 'src/app/feat-books/model/book.model';
import { BookUtilityService } from 'src/app/feat-books/services/utils/book-utility.service';
import { BookValidatorService } from 'src/app/feat-books/services/validation/book-validator.service';


@Component({
  selector: 'app-book-edit',
  templateUrl: 'book-add.component.html',
})
export class BookAddComponent {
  book: BaseBookModel;
  bookError: BookErrorModel;

  constructor(
    private readonly utilSrv: BookUtilityService,
    private readonly validateSrv: BookValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly router: Router
  ) {
    this.book = { id: '', title: '', author: '', type: '', releaseDate: '' };
    this.bookError = { idError: true, titleError: true, authorError: true, typeError: true, dateError: true };
  }

  onSubmit(data: BaseBookModel): void {
    this.bookError.idError = this.validateSrv.idUniqueValidation(data.id);
    this.bookError.titleError = this.validateSrv.dataValidation(data.title);
    this.bookError.authorError = this.validateSrv.dataValidation(data.author);
    this.bookError.typeError = this.validateSrv.dataValidation(data.type);
    this.bookError.dateError = this.validateSrv.dateValidation(data.releaseDate);

    if (
      this.bookError.idError && this.bookError.titleError && this.bookError.authorError && this.bookError.typeError &&
      this.bookError.dateError
    ) {
      this.utilSrv.addBook(data);
      this.confirmationSrv.confirm({
        message: `Dodano książkę`,
        accept: () => this.router.navigate(['/books']),
      });
    }
  }
}

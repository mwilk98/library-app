import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookUtilityService } from 'src/app/books/services/utils/book-utility.service';
import { BookValidatorService } from 'src/app/books/services/validation/book-validator.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './book-form-add.component.html',
})
export class BookFormAddComponent implements OnInit {
  constructor(
    private readonly utilSrv: BookUtilityService,
    private readonly validateSrv: BookValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _router: Router
  ) {}

  validate: boolean = true;

  ngOnInit(): void {}

  onSubmit(data: Book): void {
    this.validate = this.validateSrv.idValidation(data.id);
    this.validate = this.validateSrv.dataValidation(data.title);
    this.validate = this.validateSrv.dataValidation(data.author);
    this.validate = this.validateSrv.dataValidation(data.type);
    this.validate = this.validateSrv.dateValidation(data.releaseDate);

    if (this.validate) {
      this.utilSrv.addBook(data);
      this.confirmationSrv.confirm({
        message: `Dodano książkę`,
        accept: () => {
          this._router.navigate(['/books']);
        },
      });
    }
  }
}

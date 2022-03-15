import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { BookValidatorService } from 'src/app/books/services/validation/book-validator.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './book-form-add.component.html',
})
export class BookFormAddComponent implements OnInit {

  constructor(readonly bookSrv: BookService,
              readonly bookValidateSrv: BookValidatorService,
              private _router: Router
  ) {}

  idError: boolean = true;
  titleError: boolean = true;
  authorError: boolean = true;
  typeError: boolean = true;
  dateError: boolean = true;

  ngOnInit(): void {
  }

  onSubmit(data: Book): void {
    this.idError = this.bookValidateSrv.idValidation(data.id);
    this.titleError = this.bookValidateSrv.dataValidation(data.title);
    this.authorError = this.bookValidateSrv.dataValidation(data.author);
    this.typeError = this.bookValidateSrv.dataValidation(data.type);
    this.dateError = this.bookValidateSrv.dateValidation(data.releaseDate);

    if(this.idError && this.titleError && this.authorError && this.typeError && this.dateError) {
      this.bookSrv.addBook(data);
      this._router.navigate(['/books'])
    }    
  }
}

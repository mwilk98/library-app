import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { BookValidatorService } from 'src/app/books/services/validation/book-validator.service';

@Component({
  selector: 'app-book-form-edit',
  templateUrl: './book-form-edit.component.html',
})
export class BookFormEditComponent implements OnInit {

  constructor(readonly bookSrv: BookService,
              readonly bookValidateSrv: BookValidatorService,
              private _route: ActivatedRoute,
              private _router: Router,
              @Inject(LOCALE_ID) private locale: string
  ) {}

  id: string = '';
  date: string = '';
  book!: Book;
  idError: boolean = true;
  titleError: boolean = true;
  authorError: boolean = true;
  typeError: boolean = true;
  dateError: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.book = this.bookSrv.getBook(this.id);
    this.date = formatDate(this.book.releaseDate,'yyyy-MM-dd',this.locale);
  }

  onSubmit(data: Book): void {
    //this.idError = this.bookValidateSrv.idValidation(data.id);
    this.titleError = this.bookValidateSrv.dataValidation(data.title);
    this.authorError = this.bookValidateSrv.dataValidation(data.author);
    this.typeError = this.bookValidateSrv.dataValidation(data.type);
    this.dateError = this.bookValidateSrv.dateValidation(data.releaseDate);
    
    if(this.idError && this.titleError && this.authorError && this.typeError && this.dateError) {
      this.bookSrv.updateBook(data.id,data);
      this._router.navigate(['/books'])
    } 
  }

}

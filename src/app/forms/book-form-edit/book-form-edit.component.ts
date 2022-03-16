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

  constructor(private bookFindSrv: BookFindService,
              private bookUtilSrv: BookUtilityService,
              private bookValidateSrv: BookValidatorService,
              private confirmationService: ConfirmationService,
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
    this.book = this.bookFindSrv.getBook(this.id);
    this.date = formatDate(this.book.releaseDate,'yyyy-MM-dd',this.locale);
  }

  onSubmit(data: Book): void {
    //this.idError = this.bookValidateSrv.idValidation(data.id);
    this.titleError = this.bookValidateSrv.dataValidation(data.title);
    this.authorError = this.bookValidateSrv.dataValidation(data.author);
    this.typeError = this.bookValidateSrv.dataValidation(data.type);
    this.dateError = this.bookValidateSrv.dateValidation(data.releaseDate);
    
    if(this.idError && this.titleError && this.authorError && this.typeError && this.dateError) {
      this.bookUtilSrv.updateBook(data.id,data);
      this.confirmationService.confirm({
        message: `Zaktualizowano książkę`,
        accept: () => {
          this._router.navigate(['/books'])
        }
    }); 
    } 
  }

}

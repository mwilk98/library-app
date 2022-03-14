import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';

@Component({
  selector: 'app-book-form-edit',
  templateUrl: './book-form-edit.component.html',
})
export class BookFormEditComponent implements OnInit {

  constructor(readonly bookSrv: BookService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {}

  id: string = '';
  book!: Book;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.book = this.bookSrv.getBook(this.id);
  }

  onSubmit(data: Book): void {
    this.bookSrv.updateBook(data.id,data);
    this._router.navigate(['/books'])
  }

}

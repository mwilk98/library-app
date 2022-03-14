import { Component} from '@angular/core';
import { Book } from '../domain-model/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/books.component.html',
})
export class BooksComponent{
  constructor(
    readonly bookSrv:BookService,
    private _router: Router
  ) {
  }

  books: Array<Book> = []

  ngOnInit(): void {
    this.books = this.bookSrv.getBooks();    
  }

  deleteBook(bookId: string): void {
    this.bookSrv.deleteBook(bookId);
    this.books = this.bookSrv.getBooks();
  }

  editBook(bookId: string) {
    this._router.navigate(['/edit-book',bookId])
  }
}

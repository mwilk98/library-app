import { Component, OnInit } from '@angular/core';
import { LendingService } from '../lending/lending.service';
import { BookStoreService } from './book-store.service';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  constructor(
    private lendingSrv: LendingService,
    private bookStoreService: BookStoreService
  ) {}

  formVisible = false;
  EditRowID: string = '';
  buttonFormText: string = 'Dodaj';

  public books: Array<Book> = [];

  deleteBook(bookId: string): void {
    if (this.lendingSrv.checkLendingBook(bookId)) {
      alert('istnieje wypożyczenie nie można usunac ksiazki');
      return;
    }
    this.books = this.books.filter((book) => book.id !== bookId);
    this.bookStoreService.changeBooks(this.books);
  }

  onSubmit(data: Book) {
    this.books.push(data);
    alert('Dodano książkę');
  }

  onShowForm() {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  }

  ngOnInit(): void {
    this.bookStoreService.currentBooks.subscribe((book) => (this.books = book));
    this.lendingSrv.sharedLending = this.lendingSrv.getLending();
  }

  Edit(val: string) {
    this.EditRowID = val;
  }
}

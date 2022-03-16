import { Component } from '@angular/core';
import { Book } from '../domain-model/book.model';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BookFindService } from '../services/finder/book-find.service';
import { BookUtilityService } from '../services/utils/book-utility.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/books.component.html',
})
export class BooksComponent {
  constructor(
    private readonly findSrv: BookFindService,
    private readonly utilSrv: BookUtilityService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _router: Router
  ) {}

  books: Array<Book> = [];
  displayFail: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {
    this.books = this.findSrv.getBooks();
  }

  closeAlert(alert: boolean) {
    this.displayFail = alert;
  }

  deleteBook(bookId: string): void {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz usunąć książke o id: ${bookId}?`,
      accept: () => {
        this.displayFail = this.utilSrv.deleteBook(bookId);
        this.errorMessage = 'Nie można usunąć książki - istnieje wypożyczenie';
        if (!this.displayFail) {
          this.books = this.findSrv.getBooks();
          this.displayFail = true;
          this.errorMessage = 'Usunięto książkę';
        }
      },
    });
  }

  editBook(bookId: string) {
    this._router.navigate(['/edit-book', bookId]);
  }
}

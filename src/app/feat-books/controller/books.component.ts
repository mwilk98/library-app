import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { BooksStoreModel } from '../../store/model/base-store.model';
import { BaseBookModel } from '../model/book.model';
import { BookFindService } from '../services/finder/book-find.service';
import { BookUtilityService } from '../services/utils/book-utility.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  constructor(
    private readonly findSrv: BookFindService,
    private readonly utilSrv: BookUtilityService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly router: Router
  ) {}

  books: Array<BaseBookModel> = [];
  displayFail: boolean = false;
  errorMessage: string = '';
  header: Array<string> = ['#', 'Tytuł', 'Autor', 'Gatunek', 'Data Wydania', 'Opcje'];

  ngOnInit(): void {
    this.findSrv.getBooks().pipe(
      tap((books: BooksStoreModel) => this.books = Object.values(books)),
    ).subscribe(() => {});
  }

  closeAlert(): void {
    this.displayFail = false;
  }

  deleteBook(bookId: string): void {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz usunąć książke o id: ${bookId}?`,
      accept: () => {
        this.displayFail = !this.utilSrv.deleteBook(bookId);
        this.errorMessage = 'Nie można usunąć książki - istnieje wypożyczenie';
        if (!this.displayFail) {
          this.displayFail = true;
          this.errorMessage = 'Usunięto książkę';
        }
      },
    });
  }

  editBook(bookId: string) {
    this.router.navigate(['/edit-book', bookId]);
  }
}

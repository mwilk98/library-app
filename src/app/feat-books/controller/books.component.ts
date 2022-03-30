import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArrayUtilsService } from 'src/app/shared/utils/array-utils.service';
import { BooksStoreModel } from '../../store/model/base-store.model';
import { BaseBookModel } from '../model/book.model';
import { BookFindService } from '../services/finder/book-find.service';
import { BookUtilityService } from '../services/utils/book-utility.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  data$: Observable<Array<BaseBookModel>>;

  constructor(
    private readonly findSrv: BookFindService,
    private readonly utilSrv: BookUtilityService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly router: Router,
  ) {}

  displayFail: boolean = false;
  errorMessage: string = '';
  header$: Observable<Array<string>>;

  ngOnInit(): void {
    this.data$ = this.findSrv.getBooks();
    this.header$ = this.findSrv.getBookHeaders();
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

import { Component} from '@angular/core';
import { BookStoreService } from './store/book-store.service';
import { Book } from './domain-model/book.model';
import { LendingStoreService } from '../lending/store/lending-store.service';
import { LendingService } from '../services/lending.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent{
  constructor(
    private readonly lendingSrv: LendingService,
    readonly bookStoreSrv: BookStoreService
  ) {
  }

  formVisible = false;
  EditRowID: string = '';
  buttonFormText: string = 'Dodaj';

  deleteBook(bookId: string): void {
    if (this.lendingSrv.checkBookIfLent(bookId)) {
      alert('istnieje wypożyczenie nie można usunac ksiazki');
      return;
    }
    this.bookStoreSrv.deleteBook(bookId);
  }

  onSubmit(data: Book): void {
    this.bookStoreSrv.addBook(data);
  }

  onShowForm(): void {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  }

  edit(val: string) {
    this.EditRowID = val;
  }

  onCancelEdit(){
    this.EditRowID = '';
  }
}

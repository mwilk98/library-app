import { Component} from '@angular/core';
import { BookStoreService } from '../store/book-store.service';
import { Book } from '../domain-model/book.model';
import { LendingService } from '../../lending/services/lending.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/books.component.html',
})
export class BooksComponent{
  constructor(
    private readonly lendingSrv: LendingService,
    readonly bookStoreSrv: BookStoreService
  ) {
  }

  formAddVisible = false;
  formEditVisible = false;
  bookEdited!: Book;
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

  onEdit(book: Book, data: Book): void {
    this.formEditVisible = !this.formEditVisible;
    this.bookStoreSrv.updateBook(book.id, data);
  }
  
  onShowEdit(book: Book): void {
    this.bookEdited = book;
    this.formEditVisible = !this.formEditVisible;
  }

  onShowForm(): void {
    this.formAddVisible = !this.formAddVisible;
    this.buttonFormText = this.formAddVisible ? 'Wróć' : 'Dodaj';
  }
}

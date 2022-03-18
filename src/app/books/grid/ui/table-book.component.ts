import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../domain-model/book.model';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
})
export class TableBookComponent {
  @Input() books: Array<Book> = [];
  @Output() deleteBookEvent = new EventEmitter<string>();
  @Output() editBookEvent = new EventEmitter<string>();

  deleteBook(bookId: string) {
    this.deleteBookEvent.emit(bookId);
  }

  editBook(bookId: string) {
    this.editBookEvent.emit(bookId);
  }
}

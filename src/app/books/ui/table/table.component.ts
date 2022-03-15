import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../domain-model/book.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input() books: Array<Book> = []
  @Output() deleteBookEvent = new EventEmitter<string>();
  @Output() editBookEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBook(bookId: string) {
    this.deleteBookEvent.emit(bookId);
  }

  editBook(bookId: string) {
    this.editBookEvent.emit(bookId);
  }

}

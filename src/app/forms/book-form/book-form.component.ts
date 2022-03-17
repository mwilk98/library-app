import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookError } from 'src/app/books/domain-model/book-validate.model';
import { Book } from 'src/app/books/domain-model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: 'book-form.component.html',
})
export class BookFormComponent {
  @Input() book!: Book;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: BookError;
  @Output() submitEvent = new EventEmitter<Book>();

  onSubmit(book: Book) {
    this.submitEvent.emit(book);
  }
}


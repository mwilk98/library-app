import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookErrorModel } from '../../model/book-validate.model';
import { BaseBookModel } from '../../model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: 'book-form.component.html',
})
export class BookFormComponent {
  @Input() book!: BaseBookModel;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: BookErrorModel;
  @Output() submitEvent = new EventEmitter<BaseBookModel>();

  onSubmit(book: BaseBookModel) {
    this.submitEvent.emit(book);
  }
}


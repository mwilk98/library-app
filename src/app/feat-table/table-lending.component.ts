import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../feat-books/model/book.model';
import { Lending } from '../feat-lending/model/lending.model';
import { Student } from '../feat-students/model/student.model';


@Component({
  selector: 'app-table-lending',
  templateUrl: './table-lending.component.html',
})
export class TableLendingComponent {
  @Input() lendings: Array<Lending> = [];
  @Input() books: Array<Book> = [];
  @Input() students: Array<Student> = [];
  @Output() deleteLendingEvent = new EventEmitter<string>();
  @Output() editLendingEvent = new EventEmitter<string>();
  @Output() editLendingStatusEvent = new EventEmitter<string>();

  deleteLending(lendingId: string) {
    this.deleteLendingEvent.emit(lendingId);
  }

  editLending(lendingId: string) {
    this.editLendingEvent.emit(lendingId);
  }

  changeLendingStatus(lendingId: string) {
    this.editLendingStatusEvent.emit(lendingId);
  }
}
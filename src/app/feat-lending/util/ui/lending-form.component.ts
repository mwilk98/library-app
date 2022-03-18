import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/feat-books/model/book.model';
import { Student } from 'src/app/feat-students/model/student.model';
import { LendingError } from '../../model/lending-validate.model';
import { Lending } from '../../model/lending.model';


@Component({
  selector: 'app-lending-form',
  templateUrl: 'lending-form.component.html',
})
export class LendingFormComponent {
  @Input() lending!: Lending;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: LendingError;
  @Input() books = Array<Book>();
  @Input() students = Array<Student>();
  @Output() submitEvent = new EventEmitter<Lending>();

  onSubmit(lending: Lending) {
    this.submitEvent.emit(lending);
  }
}


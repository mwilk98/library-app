import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/books/domain-model/book.model';
import { LendingError } from 'src/app/lending/domain-model/lending-validate.model';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { Student } from 'src/app/students/domain-models/student.model';

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


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseBookModel } from 'src/app/feat-books/model/book.model';
import { BaseStudentModel } from 'src/app/feat-students/model/student.model';
import { LendingErrorModel } from '../../model/lending-validate.model';
import { BaseLendingModel } from '../../model/lending.model';


@Component({
  selector: 'app-lending-form',
  templateUrl: 'lending-form.component.html',
})
export class LendingFormComponent {
  @Input() lending!: BaseLendingModel;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: LendingErrorModel;
  @Input() books = Array<BaseBookModel>();
  @Input() students = Array<BaseStudentModel>();
  @Output() submitEvent = new EventEmitter<BaseLendingModel>();

  onSubmit(lending: BaseLendingModel) {
    this.submitEvent.emit(lending);
  }
}


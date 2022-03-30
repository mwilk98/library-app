import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentErrorModel } from '../../model/student-validate.model';
import { BaseStudentModel } from '../../model/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: 'student-form.component.html',
})
export class StudentFormComponent {
  @Input() student!: BaseStudentModel;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: StudentErrorModel;
  @Output() submitEvent = new EventEmitter<BaseStudentModel>();

  onSubmit(student: BaseStudentModel) {
    this.submitEvent.emit(student);
  }
}

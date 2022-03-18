import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LendingError } from 'src/app/lending/domain-model/lending-validate.model';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { StudentError } from 'src/app/students/domain-models/student-validate.model';
import { Student } from 'src/app/students/domain-models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: 'student-form.component.html',
})
export class StudentFormComponent {
  @Input() student!: Student;
  @Input() header: string = '';
  @Input() date: string = '';
  @Input() error!: StudentError;
  @Output() submitEvent = new EventEmitter<Student>();

  onSubmit(student: Student) {
    this.submitEvent.emit(student);
  }
}


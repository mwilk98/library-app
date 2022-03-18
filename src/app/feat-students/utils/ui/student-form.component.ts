import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentError } from '../../model/student-validate.model';
import { Student } from '../../model/student.model';


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


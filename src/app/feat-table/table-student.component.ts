import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../feat-students/model/student.model';


@Component({
  selector: 'app-table-students',
  templateUrl: './table-student.component.html',
})
export class TableStudentComponent {
  @Input() students: Array<Student> = [];
  @Output() deleteStudentEvent = new EventEmitter<string>();
  @Output() editStudentEvent = new EventEmitter<string>();

  deleteStudent(studentId: string) {
    this.deleteStudentEvent.emit(studentId);
  }

  editStudent(studentId: string) {
    this.editStudentEvent.emit(studentId);
  }
}

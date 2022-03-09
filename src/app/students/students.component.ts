import { Component } from '@angular/core';
import { LendingService } from '../lending/lending.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  constructor(private shared: LendingService) {}

  formVisible = false;
  ShowEditTable = false;
  EditRowID: string = '';

  public students: Array<Student> = [
    { id: '1', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    { id: '2', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    { id: '3', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    { id: '4', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
  ];

  deleteStudent(student: Student) {
    this.students = this.students.filter((item) => item !== student);
  }

  onSubmit(data: Student) {
    this.students.push(data);
  }

  onShowForm() {
    this.formVisible = !this.formVisible;
  }

  Edit(val:string) {
    this.EditRowID = val;
  }

  ngOnInit(): void {
    this.shared.setStudent(this.students);
  }
}

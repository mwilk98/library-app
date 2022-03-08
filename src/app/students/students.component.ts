import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  newStudent: string = '';

  public students: Student[] = [
    { id: '1', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    { id: '2', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    { id: '3', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    { id: '4', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
    { id: '5', name: 'name 5', surname: 'surname 5', age: 15, class: '1e' },
  ];

  deleteStudent(student: Student) {
    this.students = this.students.filter((item) => item !== student);
  }

  onSubmit(data: any) {
    this.students.push({
      id: data.id,
      name: data.name,
      surname: data.surname,
      age: data.age,
      class: data.class,
    });
  }
}

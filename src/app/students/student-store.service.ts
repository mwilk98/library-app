import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentStoreService {
  private studentsSource = new BehaviorSubject<Array<Student>>([
    { id: '1', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    { id: '2', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    { id: '3', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    { id: '4', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
  ]);

  currentStudents = this.studentsSource.asObservable();

  constructor() {}

  changeStudents(student: Array<Student>) {
    this.studentsSource.next(student);
  }
}

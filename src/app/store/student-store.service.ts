import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student, StudentStore } from '../feat-students/model/student.model';

@Injectable({ providedIn: 'root' })
export class StudentStoreService {
  private students: StudentStore = {
    '1': { id: '1', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    '2': { id: '2', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    '3': { id: '3', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    '4': { id: '4', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
    '5': { id: '5', name: 'name 5', surname: 'surname 5', age: 14, class: '1e' }
  };

  getStudent(studentId: string): Student {
    const studentObj = Object.values(this.students).find(
      (student) => student.id === studentId
    );
    if (studentObj === undefined) {
      throw new Error(`Nie znaleziono ucznia o podanym id: ${studentId}`);
    }
    return studentObj;
  }

  getStudents(): Observable<StudentStore> {
    return of(this.students);
  }

  addStudent(newStudent: Student): Student {
    this.students[this.generateKey(newStudent)] = newStudent;
    return newStudent;
  }

  updateStudent(idStudent: string, newStudent: Student): Student {
    newStudent.id = idStudent;
    this.students[idStudent] = newStudent;
    return newStudent;
  }

  deleteStudent(idStudent: string): void {
    const newStudents: StudentStore = {};
    Object.values(this.students)
      .filter((student) => student.id !== idStudent)
      .forEach((student) => {
        newStudents[this.generateKey(student)] = student;
      });
    this.students = newStudents;
  }

  private generateKey(book: Student): string {
    return Object.values(book).join('-');
  }
}

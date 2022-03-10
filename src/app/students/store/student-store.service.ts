import { Injectable } from '@angular/core';
import { Student, StudentStore } from '../domain-models/student.model';
@Injectable({ providedIn: 'root' })
export class StudentStoreService {
  private students : StudentStore = {
    '0': { id: '0', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    '1': { id: '1', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    '2': { id: '2', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    '3': { id: '3', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
    '4': { id: '4', name: 'name 5', surname: 'surname 5', age: 14, class: '1e' }
   }

  getStudents(): Array<Student> {
    return Object.values(this.students);
  }

  addStudent(newStudent: Student): Student {
    this.students[this.generateKey(newStudent)] = newStudent;
    alert('Dodano ucznia');
    return newStudent;
  }

  updateStudent(idStudent: string, newStudent: Student): Student {
    this.students[idStudent] = newStudent;
    alert('Zaktualizowano ucznia');
    return newStudent;
  }

  deleteStudent(idStudent: string): void{
    const newStudents: StudentStore = {};
    Object.values(this.students)
      .filter(student => student.id !== idStudent)
      .forEach(student => {
          newStudents[this.generateKey(student)] = student;
      })  
      this.students = newStudents;
  }

  private generateKey(book: Student): string {
    return Object.values(book).join('-');
  }
}

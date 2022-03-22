import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { BaseStudentModel } from 'src/app/feat-students/model/student.model';
import { StudentStoreModel } from '../model/base-store.model';


@Injectable({ providedIn: 'root' })
export class StudentStoreService {
  students: BehaviorSubject<StudentStoreModel> = new BehaviorSubject<StudentStoreModel>({
    '1': { id: '1', name: 'name 1', surname: 'surname 1', age: 11, class: '1a' },
    '2': { id: '2', name: 'name 2', surname: 'surname 2', age: 12, class: '1b' },
    '3': { id: '3', name: 'name 3', surname: 'surname 3', age: 13, class: '1c' },
    '4': { id: '4', name: 'name 4', surname: 'surname 4', age: 14, class: '1d' },
    '5': { id: '5', name: 'name 5', surname: 'surname 5', age: 14, class: '1e' }
  });

  getStudents(): Observable<StudentStoreModel> {
    return this.students.pipe(
      map((students: StudentStoreModel) => students)
    ); 
  }

  getStudent(idStudent: string): BaseStudentModel {
    let stuentObj! : BaseStudentModel;
    this.students.pipe(
      map((students: StudentStoreModel) => Object.values(students)),
      map((students: Array<BaseStudentModel>) => {
        const newStudents: StudentStoreModel = {};
        students.forEach((student: BaseStudentModel) => {
          if (student.id === idStudent) {
            stuentObj = student;
          }
        });
        return newStudents;
      })
    )
    .subscribe(() => {})
    .unsubscribe();
    
    return stuentObj;  
  }

  addStudent(newStudent: BaseStudentModel): BaseStudentModel {
    this.students.pipe(
      map((students: StudentStoreModel) => Object.values(students)),
      map((students: Array<BaseStudentModel>) => {
        const newStudents: StudentStoreModel = {};
        students.forEach((student: BaseStudentModel) => {
            newStudents[this.generateKey(student)] = student;
        });
        newStudents[this.generateKey(newStudent)] = newStudent;
        return newStudents;
      }),
      tap((newStudents: StudentStoreModel) => this.students.next(newStudents))
    )
    .subscribe(() => {})
    .unsubscribe();
    return newStudent;
  }

  updateStudent(idStudent: string, newStudent: BaseStudentModel): BaseStudentModel {
    this.students.pipe(
      map((students: StudentStoreModel) => Object.values(students)),
      map((students: Array<BaseStudentModel>) => {
        const newStudents: StudentStoreModel = {};
        students.forEach((student: BaseStudentModel) => {
          if (student.id !== idStudent) {
            newStudents[this.generateKey(student)] = student;
          } else {
            newStudents[this.generateKey(student)] = newStudent;
          }
        });
        return newStudents;
      }),
      tap((newStudents: StudentStoreModel) => this.students.next(newStudents))
    )
    .subscribe(() => {})
    .unsubscribe();
    return newStudent;
  }

  deleteStudent(idStudent: string): void {
    this.students.pipe(
      map((students: StudentStoreModel) => Object.values(students)),
      map((students: Array<BaseStudentModel>) => {
        const newStudents: StudentStoreModel = {};
        students.forEach((student: BaseStudentModel) => {
          if (student.id !== idStudent) {
            newStudents[this.generateKey(student)] = student;
          }
        });
        return newStudents;
      }),
      tap((newStudents: StudentStoreModel) => this.students.next(newStudents))
    )
    .subscribe(() => {})
    .unsubscribe();
  }

  private generateKey(student: BaseStudentModel): string {
    return Object.values(student).join('-');
  }
}

import { Injectable } from '@angular/core';
import { StudentStoreService } from 'src/app/store/student-store.service';
import { Student } from '../../domain-models/student.model';

/* serwis do obsługi edycji danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentUtilityService {
  constructor(private readonly storeSrv: StudentStoreService) {}

  deleteStudent(studentId: string): void {
    this.storeSrv.deleteStudent(studentId);
  }

  addStudent(newStudent: Student): void {
    this.storeSrv.addStudent(newStudent);
  }

  updateStudent(idStudent: string, newStudent: Student): void {
    this.storeSrv.updateStudent(idStudent, newStudent);
  }
}

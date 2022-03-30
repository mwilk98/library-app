import { Injectable } from '@angular/core';
import { StudentStoreService } from 'src/app/store/service/student-store.service';
import { BaseStudentModel } from '../../model/student.model';


/* serwis do obsługi edycji danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentUtilityService {
  constructor(private readonly storeSrv: StudentStoreService) {}

  deleteStudent(studentId: string): void {
    this.storeSrv.deleteStudent(studentId);
  }

  addStudent(newStudent: BaseStudentModel): void {
    this.storeSrv.addStudent(newStudent);
  }

  updateStudent(idStudent: string, newStudent: BaseStudentModel): void {
    this.storeSrv.updateStudent(idStudent, newStudent);
  }
}

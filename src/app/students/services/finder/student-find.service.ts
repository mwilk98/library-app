import { Injectable } from '@angular/core';
import { StudentStoreService } from 'src/app/store/student-store.service';
import { Student } from '../../domain-models/student.model';

/* serwis do obsługi pobrania danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentFindService {
  constructor(private readonly storeSrv: StudentStoreService) {}

  getStudent(studentId: string): Student {
    return this.storeSrv.getStudent(studentId);
  }

  getStudents(): Array<Student> {
    return this.storeSrv.getStudents();
  }
}

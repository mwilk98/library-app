import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentStoreService } from 'src/app/store/student-store.service';
import { Student, StudentStore } from '../../model/student.model';


/* serwis do obsługi pobrania danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentFindService {
  constructor(private readonly storeSrv: StudentStoreService) {}

  getStudent(studentId: string): Student {
    return this.storeSrv.getStudent(studentId);
  }

  getStudents(): Observable<StudentStore> {
    return this.storeSrv.getStudents();
  }
}

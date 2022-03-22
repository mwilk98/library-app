import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentStoreModel } from 'src/app/store/model/base-store.model';
import { StudentStoreService } from 'src/app/store/service/student-store.service';
import { BaseStudentModel } from '../../model/student.model';


/* serwis do obsługi pobrania danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentFindService {
  constructor(private readonly storeSrv: StudentStoreService) {}

  getStudent(studentId: string): BaseStudentModel {
    return this.storeSrv.getStudent(studentId);
  }

  getStudents(): Observable<StudentStoreModel> {
    return this.storeSrv.getStudents();
  }
}

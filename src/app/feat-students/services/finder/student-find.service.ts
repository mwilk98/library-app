import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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

  getStudents(): Observable<Array<BaseStudentModel>> {     
    return this.storeSrv.getStudentList().pipe(
        map(students => Object.values(students))
    );
  }

  getStudentHeaders(): Observable<Array<string>> {
    return of(['#', 'Imie', 'Nazwisko', 'Wiek', 'Klasa', 'Opcje']);
  }
}

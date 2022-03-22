import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StudentStoreModel } from 'src/app/store/model/base-store.model';
import { BaseStudentModel } from '../../model/student.model';
import { StudentFindService } from '../finder/student-find.service';

/* serwis do walidacji danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentValidatorService {
  constructor(private findSrv: StudentFindService) {}

  students: Array<BaseStudentModel> = []; 

  /* Sprawdza czy wartość nie jest undefined */
  baseValidation<TValue>(value: TValue): boolean {
    if (value === undefined) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność i unikalność podanego id dla BaseStudentModelów */
  idValidation(idStudent: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idStudent);
    if (idStudent === '') { return false; }
    if (!baseValidation) { return false; }
    return true;
  }
  idUniqueValidation(idStudent: string): boolean {
    this.students = [];
    this.findSrv.getStudents().pipe(
        map((students: StudentStoreModel) => Object.values(students)),
        map((students: Array<BaseStudentModel>) => {  
            students.forEach((student: BaseStudentModel) => {
                if (student.id === idStudent) {
                    this.students = students;   
                } 
            });
        })
      ).subscribe(() => {})
      .unsubscribe();
    const baseValidation: boolean = this.baseValidation<string>(idStudent);
    if (idStudent === '') { return false; }
    if (!baseValidation) { return false; }
    if (this.students.length !== 0 ) { return false; }
    return true;
  }

  /* Sprawdza poprawność podanego imienia dla BaseStudentModela */
  nameValidation(nameBaseStudentModel: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(nameBaseStudentModel);
    const nameValidation = new RegExp('^[A-Za-z]+$');
    if (!baseValidation) {
      return false;
    }
    if (nameBaseStudentModel === '') {
      return false;
    }
    if (!nameValidation.test(nameBaseStudentModel)) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanego nazwiska dla BaseStudentModela */
  surnameValidation(surnameBaseStudentModel: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(surnameBaseStudentModel);
    const nameValidation = new RegExp("^[a-zA-Z][a-zA-Z .,'-]*$");
    if (!baseValidation) {
      return false;
    }
    if (surnameBaseStudentModel === '') {
      return false;
    }
    if (!nameValidation.test(surnameBaseStudentModel)) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanego wieku dla BaseStudentModela */
  ageValidation(ageBaseStudentModel: number): boolean {
    const baseValidation: boolean = this.baseValidation<number>(ageBaseStudentModel);
    if (!baseValidation) {
      return false;
    }
    if (ageBaseStudentModel === 0) {
      return false;
    }
    if (ageBaseStudentModel <= 0 || ageBaseStudentModel > 100) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanej klasy dla BaseStudentModela */
  classValidation(classBaseStudentModel: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(classBaseStudentModel);
    if (!baseValidation) {
      return false;
    }
    if (classBaseStudentModel === '') {
      return false;
    }
    const nameValidation = new RegExp('^[1-9][a-z]$');

    if (!nameValidation.test(classBaseStudentModel)) {
      return false;
    }
    return true;
  }
}

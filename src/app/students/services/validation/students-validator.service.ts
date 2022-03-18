import { Injectable } from '@angular/core';
import { StudentStoreService } from '../../../store/student-store.service';
import { Student } from '../../domain-models/student.model';

/* serwis do walidacji danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentValidatorService {
  constructor(private studentStoreSrv: StudentStoreService) {}

  /* Sprawdza czy wartość nie jest undefined */
  baseValidation<TValue>(value: TValue): boolean {
    if (value === undefined) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność i unikalność podanego id dla studentów */
  idValidation(idStudent: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idStudent);

    if (idStudent === '') {
      return false;
    }
    return true;
  }
  idUniqueValidation(idStudent: string): boolean {
    const students: Array<Student> = this.studentStoreSrv
      .getStudents()
      .filter((student: Student) => student.id === idStudent);
    if (students.length !== 0) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanego imienia dla studenta */
  nameValidation(nameStudent: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(nameStudent);
    const nameValidation = new RegExp('^[A-Za-z]+$');
    if (!baseValidation) {
      return false;
    }
    if (nameStudent === '') {
      return false;
    }
    if (!nameValidation.test(nameStudent)) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanego nazwiska dla studenta */
  surnameValidation(surnameStudent: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(surnameStudent);
    const nameValidation = new RegExp("^[a-zA-Z][a-zA-Z .,'-]*$");
    if (!baseValidation) {
      return false;
    }
    if (surnameStudent === '') {
      return false;
    }
    if (!nameValidation.test(surnameStudent)) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanego wieku dla studenta */
  ageValidation(ageStudent: number): boolean {
    const baseValidation: boolean = this.baseValidation<number>(ageStudent);
    if (!baseValidation) {
      return false;
    }
    if (ageStudent === 0) {
      return false;
    }
    if (ageStudent <= 0 || ageStudent > 100) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność podanej klasy dla studenta */
  classValidation(classStudent: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(classStudent);
    if (!baseValidation) {
      return false;
    }
    if (classStudent === '') {
      return false;
    }
    const nameValidation = new RegExp('^[1-9][a-z]$');

    if (!nameValidation.test(classStudent)) {
      return false;
    }
    return true;
  }
}

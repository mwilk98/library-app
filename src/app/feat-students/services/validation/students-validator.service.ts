import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StudentStoreService } from '../../../store/student-store.service';
import { Student } from '../../model/student.model';
import { StudentFindService } from '../finder/student-find.service';


/* serwis do walidacji danych ucznia */
@Injectable({ providedIn: 'root' })
export class StudentValidatorService {
  constructor(private findSrv: StudentFindService) {}

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
    if (idStudent === '') { return false; }
    if (!baseValidation) { return false; }
    return true;
  }
  idUniqueValidation(idStudent: string): boolean {
    let students: Array<Student> = [];
    this.findSrv.getStudents()
    .pipe(
        map(books => Object.values(books)
            .filter(book => book.id === idStudent))
    ).subscribe(bookList => students = Object.values(bookList));
    const baseValidation: boolean = this.baseValidation<string>(idStudent);
    if (idStudent === '') { return false; }
    if (!baseValidation) { return false; }
    if (students.length !== 0 ) { return false; }
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

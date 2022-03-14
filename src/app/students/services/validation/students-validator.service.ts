import { Injectable } from "@angular/core";
import { StudentStoreService } from "../../../stores/students/student-store.service";
import { Student } from "../../domain-models/student.model";

@Injectable({ providedIn: 'root' })
export class StudentValidatorService {
    constructor(private readonly studentStoreSrv: StudentStoreService) {
    }

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla studentów */
    idValidation(idStudent: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idStudent);
        const students: Array<Student> = this.studentStoreSrv.getStudents().filter(student => student.id === idStudent);
        
        if (!baseValidation) { return false; }
        if (idStudent === '') { return false; }
        if (students.length !== 0 ) { return false; }

        return true;
    }
    nameValidation(nameStudent: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(nameStudent);
        const nameValidation = new RegExp("^[A-Za-z]+$");
        
        if (!baseValidation) { return false; }
        if (nameStudent === '') { return false; }
        if (!nameValidation.test(nameStudent)) { return false; }
        
        return true;
    }
    surnameValidation(surnameStudent: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(surnameStudent);
        const nameValidation = new RegExp("^[a-zA-Z][a-zA-Z .,'-]*$");
        
        if (!baseValidation) { return false; }
        if (surnameStudent === '') { return false; }
        if (!nameValidation.test(surnameStudent)) { return false; }
        
        return true;
    }
    ageValidation(ageStudent: number): boolean {
        const baseValidation: boolean = this.baseValidation<number>(ageStudent);
        
        if (!baseValidation) { return false; }
        if (ageStudent === 0) { return false; }   
        if (ageStudent <= 0 || ageStudent > 100) { return false; }
        
        return true;
    }
    classValidation(classStudent: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(classStudent);
        
        if (!baseValidation) { return false; }
        if (classStudent === '') { return false; }
        const nameValidation = new RegExp("^[1-9][a-z]$");
        if (!nameValidation.test(classStudent)) { return false; }
     
        return true;
    }
}
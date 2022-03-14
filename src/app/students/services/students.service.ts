import { Injectable } from '@angular/core';
import { StudentStoreService } from '../../stores/students/student-store.service';
import { Student } from '../domain-models/student.model';
import { StudentValidatorService } from './validation/students-validator.service';

@Injectable({ providedIn: 'root' })
export class StudentService{
    constructor(readonly studentStoreSrv: StudentStoreService) {}

    getStudent(studentId: string): Student {
        return this.studentStoreSrv.getStudent(studentId);
    }

    getStudents(): Array<Student>  {     
        return this.studentStoreSrv.getStudents();
    }

    deleteStudent(studentId:string): void {
        this.studentStoreSrv.deleteStudent(studentId);
    }
    
    addStudent(newStudent: Student): void {
        this.studentStoreSrv.addStudent(newStudent);
    }

    updateStudent(idStudent: string, newStudent: Student): void {
        this.studentStoreSrv.updateStudent(idStudent,newStudent);
    }
    
}

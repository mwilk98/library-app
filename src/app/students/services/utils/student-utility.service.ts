import { Injectable } from "@angular/core";
import { StudentStoreService } from "src/app/stores/student-store.service";
import { Student } from "../../domain-models/student.model";

@Injectable({ providedIn: 'root' })
export class StudentUtilityService {
    constructor(private studentStoreSrv: StudentStoreService,
    ) { }
    
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
import { Injectable } from "@angular/core";
import { StudentStoreService } from "src/app/stores/student-store.service";
import { Student } from "../../domain-models/student.model";

@Injectable({ providedIn: 'root' })
export class StudentFindService {
    constructor(private studentStoreSrv: StudentStoreService) {}
    
    getStudent(studentId: string): Student {
        return this.studentStoreSrv.getStudent(studentId);
    }

    getStudents(): Array<Student>  {     
        return this.studentStoreSrv.getStudents();
    }
}
import { Injectable } from '@angular/core';
import { StudentStoreService } from '../../stores/students/student-store.service';

@Injectable({ providedIn: 'root' })
export class StudentService{
    constructor(readonly studentStoreSrv: StudentStoreService) {}

    getStudents() {     
        return this.studentStoreSrv.getStudents();
    }
    deleteStudent(studentId:string) {
        this.studentStoreSrv.deleteStudent(studentId);
    }
}

import { Component } from '@angular/core';
import { StudentStoreService } from '../store/student-store.service';
import { Student } from '../domain-models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: '../ui/students.component.html',
})
export class StudentsComponent {
  constructor(
    readonly studentStoreSrv: StudentStoreService
  ) {}

  formAddVisible = false;
  formEditVisible = false;
  EditRowID: string = '';
  buttonFormText = 'Dodaj';
  studentEdited!: Student;

  deleteStudent(studentId: string) {
    this.studentStoreSrv.deleteStudent(studentId);
  }

  onSubmit(data: Student) {
    this.studentStoreSrv.addStudent(data);
  }

  onEdit(student: Student, data: Student): void {
    this.formEditVisible = !this.formEditVisible;
    this.studentStoreSrv.updateStudent(student.id, data);
  }
  
  onShowEdit(student: Student): void {
    this.studentEdited = student;
    this.formEditVisible = !this.formEditVisible;
  }

  onShowForm() {
    this.formAddVisible = !this.formAddVisible;
    this.buttonFormText = this.formAddVisible ? 'Wróć' : 'Dodaj';
  } 
}

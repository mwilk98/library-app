import { Component } from '@angular/core';
import { StudentStoreService } from './store/student-store.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  constructor(
    readonly studentStoreSrv: StudentStoreService
  ) {}

  formVisible = false;
  EditRowID: string = '';
  buttonFormText = 'Dodaj';

  deleteStudent(studentId: string) {
    this.studentStoreSrv.deleteStudent(studentId);
  }

  onSubmit(data: Student) {
    this.studentStoreSrv.addStudent(data);

  }

  onShowForm() {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  } 

  Edit(val: string) {
    this.EditRowID = val;
  }

  onCancelEdit() {
    this.EditRowID = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
})
export class FormEditComponent implements OnInit {

  constructor(readonly studentSrv: StudentService) {}

  ngOnInit(): void {
  }

  onSubmit(data: Student): void {
    this.studentSrv.updateStudent(data.id,data);
  }

}

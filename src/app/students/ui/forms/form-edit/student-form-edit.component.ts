import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './student-form-edit.component.html',
})
export class StudentFormEditComponent implements OnInit {

  constructor(readonly studentSrv: StudentService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {}

  id: string = '';
  student!: Student;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.student = this.studentSrv.getStudent(this.id);
  }

  onSubmit(data: Student): void {
    this.studentSrv.updateStudent(data.id,data);
    this._router.navigate(['/students'])
  }

}

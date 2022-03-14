import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../domain-models/student.model';
import { StudentService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: '../ui/students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(readonly studentSrv: StudentService,
              private _router: Router
  ) {}

  students: Array<Student> = [];

  ngOnInit(): void {
    this.students = this.studentSrv.getStudents();    
  }

  deleteStudent(studentId: string): void {
    this.studentSrv.deleteStudent(studentId);
    this.students = this.studentSrv.getStudents();
  }

  editStudent(studentId: string) {
    this._router.navigate(['/edit-student',studentId])
  }
}

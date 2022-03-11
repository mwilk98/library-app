import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../domain-models/student.model';
import { StudentService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: '../ui/students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(readonly studentSrv: StudentService) {}

  students: Array<Student> = [];

  ngOnInit(): void {
    this.students = this.studentSrv.getStudents()
  }

  deleteStudent(studentId: string) {
    this.studentSrv.deleteStudent(studentId);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Student } from '../domain-models/student.model';
import { StudentService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: '../ui/students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(readonly studentSrv: StudentService,
              private confirmationService: ConfirmationService,
              private _router: Router
  ) {}

  students: Array<Student> = [];
  displayBasic: boolean = false;

  ngOnInit(): void {
    this.students = this.studentSrv.getStudents();    
  }

  deleteStudent(studentId: string): void {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz usunąć studenta o id: ${studentId}?`,
      accept: () => {
        this.studentSrv.deleteStudent(studentId);
        this.students = this.studentSrv.getStudents();
        this.displayBasic = true; 
      }
  }); 
  }

  editStudent(studentId: string) {
    this._router.navigate(['/edit-student', studentId])
  }
}

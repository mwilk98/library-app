import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Student } from '../../model/student.model';

import { StudentFindService } from '../../services/finder/student-find.service';
import { StudentUtilityService } from '../../services/utils/student-utility.service';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(
    private readonly studentUtilSrv: StudentUtilityService,
    private studentFindSrv: StudentFindService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) {}

  students: Array<Student> = [];
  displayFail: boolean = false;
  errorMessage: string = '';
  header: Array<string> = [
    '#',
    'Imie',
    'Nazwisko',
    'Wiek',
    'Klasa',
    'Opcje'
  ]

  ngOnInit(): void {
    this.studentFindSrv.getStudents().subscribe(bookList => this.students = Object.values(bookList));
  }

  closeAlert(alert: boolean): void {
    this.displayFail = alert;
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this._router.navigate([currentUrl]);
  });
  }

  deleteStudent(studentId: string): void {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz usunąć studenta o id: ${studentId}?`,
      accept: () => {
        this.studentUtilSrv.deleteStudent(studentId);
        this.displayFail = true;
        this.errorMessage = 'Usunięto ucznia';
      },
    });
  }

  editStudent(studentId: string) {
    this._router.navigate(['/edit-student', studentId]);
  }
}

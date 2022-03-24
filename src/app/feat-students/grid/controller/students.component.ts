import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { ArrayUtilsService } from 'src/app/shared/utils/array-utils.service';
import { BaseStudentModel } from '../../model/student.model';
import { StudentFindService } from '../../services/finder/student-find.service';
import { StudentUtilityService } from '../../services/utils/student-utility.service';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
})
export class StudentsComponent implements OnInit {
  data$: Observable<Array<Array<string>>>;

  constructor(
    private readonly studentUtilSrv: StudentUtilityService,
    private readonly findSrv: StudentFindService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private readonly arrayUtilsSrv: ArrayUtilsService,
  ) {}

  displayFail: boolean = false;
  errorMessage: string = '';
  header$: Observable<Array<string>>;

  ngOnInit(): void {
    this.data$ = this.findSrv.getStudents();
    this.header$ = this.findSrv.getStudentHeaders();
  }

  closeAlert(alert: boolean): void {
    this.displayFail = alert;
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
    this.router.navigate(['/edit-student', studentId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { StudentErrorModel } from '../../model/student-validate.model';
import { BaseStudentModel } from '../../model/student.model';
import { StudentFindService } from '../../services/finder/student-find.service';
import { StudentUtilityService } from '../../services/utils/student-utility.service';
import { StudentValidatorService } from '../../services/validation/students-validator.service';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
})
export class StudentEditComponent implements OnInit {
  studentError: StudentErrorModel;
  
  constructor(
    private readonly findSrv: StudentFindService,
    private readonly utilSrv: StudentUtilityService,
    private readonly validateSrv: StudentValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.studentError = {
      idError: true,
      nameError: true,
      surnameError: true,
      ageError: true,
      classError: true,
    };
  }

  id: string = '';
  student!: BaseStudentModel;
  validate: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.student = this.findSrv.getStudent(this.id);
  }

  onSubmit(data: BaseStudentModel): void {
    this.studentError.idError = this.validateSrv.idValidation(data.name);
    this.studentError.nameError = this.validateSrv.nameValidation(data.name);
    this.studentError.surnameError = this.validateSrv.surnameValidation(data.surname);
    this.studentError.ageError = this.validateSrv.ageValidation(data.age);
    this.studentError.classError = this.validateSrv.classValidation(data.class);

    if (
      this.studentError.idError &&
      this.studentError.nameError &&
      this.studentError.surnameError &&
      this.studentError.ageError &&
      this.studentError.classError
      )  {
      this.utilSrv.updateStudent(data.id, data);
      this.confirmationSrv.confirm({
        message: `Zaktualizowano studenta o id ${data.id}`,
        accept: () => {
          this._router.navigate(['/students']);
        },
      });
    }
  }
}

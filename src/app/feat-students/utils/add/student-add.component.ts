import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { StudentErrorModel } from '../../model/student-validate.model';
import { BaseStudentModel } from '../../model/student.model';
import { StudentUtilityService } from '../../services/utils/student-utility.service';
import { StudentValidatorService } from '../../services/validation/students-validator.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
})
export class StudentAddComponent{
  student: BaseStudentModel;
  studentError: StudentErrorModel;

  constructor(
    private readonly utilSrv: StudentUtilityService,
    private readonly validateSrv: StudentValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _router: Router
  ) {
    this.student = {
      id: '',
      name: '',
      surname: '',
      age: 0,
      class: '',
    };
    this.studentError = {
      idError: true,
      nameError: true,
      surnameError: true,
      ageError: true,
      classError: true,
    };
  }

  onSubmit(data: BaseStudentModel): void {
    this.studentError.idError = this.validateSrv.idUniqueValidation(data.id);
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
      ) {
      this.utilSrv.addStudent(data);
      this.confirmationSrv.confirm({
        message: `Dodano studenta`,
        accept: () => {
          this._router.navigate(['/students']);
        },
      });
    }
  }
}

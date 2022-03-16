import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentUtilityService } from 'src/app/students/services/utils/student-utility.service';
import { StudentValidatorService } from 'src/app/students/services/validation/students-validator.service';

@Component({
  selector: 'app-student-form-add',
  templateUrl: './student-form-add.component.html',
})
export class StudentFormAddComponent implements OnInit {
  constructor(
    private readonly utilSrv: StudentUtilityService,
    private readonly validateSrv: StudentValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _router: Router
  ) {}

  validate: boolean = true;
  displayBasic: boolean = false;

  ngOnInit(): void {}

  onSubmit(data: Student): void {
    this.validate = this.validateSrv.idValidation(data.id);
    this.validate = this.validateSrv.nameValidation(data.name);
    this.validate = this.validateSrv.surnameValidation(data.surname);
    this.validate = this.validateSrv.ageValidation(data.age);
    this.validate = this.validateSrv.classValidation(data.class);

    if (this.validate) {
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

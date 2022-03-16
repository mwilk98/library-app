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

  constructor(readonly studentUtilSrv: StudentUtilityService,
              readonly studentValidateSrv: StudentValidatorService,
              private confirmationService: ConfirmationService,
              private _router: Router
  ) {}

  idError: boolean = true;
  nameError: boolean = true;
  surnameError: boolean = true;
  ageError: boolean = true;
  classError: boolean = true;
  displayBasic: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(data: Student): void {
    this.idError = this.studentValidateSrv.idValidation(data.id);
    this.nameError = this.studentValidateSrv.nameValidation(data.name);
    this.surnameError = this.studentValidateSrv.surnameValidation(data.surname);
    this.ageError = this.studentValidateSrv.ageValidation(data.age);
    this.classError = this.studentValidateSrv.classValidation(data.class);

    if(this.idError && this.nameError && this.surnameError && this.ageError && this.classError) {
      this.studentUtilSrv.addStudent(data);
      this.confirmationService.confirm({
        message: `Dodano studenta`,
        accept: () => {
          this._router.navigate(['/students'])
        }
    }); 
    }    
  }
}

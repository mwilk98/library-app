import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';
import { StudentValidatorService } from 'src/app/students/services/validation/students-validator.service';

@Component({
  selector: 'app-student-form-add',
  templateUrl: './student-form-add.component.html',
})
export class StudentFormAddComponent implements OnInit {

  constructor(readonly studentSrv: StudentService,
              readonly studentValidateSrv: StudentValidatorService,
              private _router: Router
  ) {}

  idError: boolean = true;
  nameError: boolean = true;
  surnameError: boolean = true;
  ageError: boolean = true;
  classError: boolean = true;

  ngOnInit(): void {
  }

  onSubmit(data: Student): void {
    this.idError = this.studentValidateSrv.idValidation(data.id);
    this.nameError = this.studentValidateSrv.nameValidation(data.name);
    this.surnameError = this.studentValidateSrv.surnameValidation(data.surname);
    this.ageError = this.studentValidateSrv.ageValidation(data.age);
    this.classError = this.studentValidateSrv.classValidation(data.class);

    if(this.idError && this.nameError && this.surnameError && this.ageError && this.classError) {
      this.studentSrv.addStudent(data);
      this._router.navigate(['/students'])
    }    
  }
}

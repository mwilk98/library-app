import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentService } from 'src/app/students/services/students.service';
import { StudentValidatorService } from 'src/app/students/services/validation/students-validator.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './student-form-edit.component.html',
})
export class StudentFormEditComponent implements OnInit {

  constructor(readonly studentSrv: StudentService,
              private studentValidateSrv: StudentValidatorService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {}

  id: string = '';
  student!: Student;
  idError: boolean = true;
  nameError: boolean = true;
  surnameError: boolean = true;
  ageError: boolean = true;
  classError: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.student = this.studentSrv.getStudent(this.id);
  }

  onSubmit(data: Student): void {
    //this.idError = this.studentValidateSrv.idValidation(data.id);
    this.nameError = this.studentValidateSrv.nameValidation(data.name);
    this.surnameError = this.studentValidateSrv.surnameValidation(data.surname);
    this.ageError = this.studentValidateSrv.ageValidation(data.age);
    this.classError = this.studentValidateSrv.classValidation(data.class);

    if(this.idError && this.nameError && this.surnameError && this.ageError && this.classError) {
      this.studentSrv.updateStudent(data.id,data);
      this._router.navigate(['/students'])
    }    
  }
}

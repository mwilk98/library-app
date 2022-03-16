import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Student } from 'src/app/students/domain-models/student.model';
import { StudentFindService } from 'src/app/students/services/finder/student-find.service';
import { StudentUtilityService } from 'src/app/students/services/utils/student-utility.service';
import { StudentValidatorService } from 'src/app/students/services/validation/students-validator.service';

@Component({
  selector: 'app-student-form-edit',
  templateUrl: './student-form-edit.component.html',
})
export class StudentFormEditComponent implements OnInit {

  constructor(readonly studentFindSrv: StudentFindService,
              readonly studentUtilSrv: StudentUtilityService,
              private studentValidateSrv: StudentValidatorService,
              private confirmationService: ConfirmationService,
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
    this.student = this.studentFindSrv.getStudent(this.id);
  }

  onSubmit(data: Student): void {
    //this.idError = this.studentValidateSrv.idValidation(data.id);
    this.nameError = this.studentValidateSrv.nameValidation(data.name);
    this.surnameError = this.studentValidateSrv.surnameValidation(data.surname);
    this.ageError = this.studentValidateSrv.ageValidation(data.age);
    this.classError = this.studentValidateSrv.classValidation(data.class);

    if(this.idError && this.nameError && this.surnameError && this.ageError && this.classError) {
      this.studentUtilSrv.updateStudent(data.id,data);
      this.confirmationService.confirm({
        message: `Zaktualizowano studenta o id ${data.id}`,
        accept: () => {
          this._router.navigate(['/students'])
        }
    }); 
    }    
  }
}

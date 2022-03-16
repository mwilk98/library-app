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
  constructor(
    private readonly findSrv: StudentFindService,
    private readonly utilSrv: StudentUtilityService,
    private readonly validateSrv: StudentValidatorService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {}

  id: string = '';
  student!: Student;
  validate: boolean = true;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.student = this.findSrv.getStudent(this.id);
  }

  onSubmit(data: Student): void {
    this.validate = this.validateSrv.nameValidation(data.name);
    this.validate = this.validateSrv.surnameValidation(data.surname);
    this.validate = this.validateSrv.ageValidation(data.age);
    this.validate = this.validateSrv.classValidation(data.class);

    if (this.validate) {
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

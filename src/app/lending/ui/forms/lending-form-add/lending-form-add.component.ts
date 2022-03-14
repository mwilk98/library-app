import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lending } from 'src/app/lending/domain-model/lending.model';
import { LendingService } from 'src/app/lending/services/lending.service';
import { LendingValidatorService } from 'src/app/lending/services/validation/lendings-validator.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './lending-form-add.component.html'
})
export class LendingFormAddComponent implements OnInit {

  constructor(readonly lendingSrv: LendingService,
    readonly lendingValidationSrv: LendingValidatorService,
    private _router: Router
) {}

idError: boolean = true;

ngOnInit(): void {
}

onSubmit(data: Lending): void {
  this.idError = this.lendingValidationSrv.idValidation(data.id);

  if(this.idError) {
    this.lendingSrv.addLending(data);
    this._router.navigate(['/lendings'])
  }    
}

}


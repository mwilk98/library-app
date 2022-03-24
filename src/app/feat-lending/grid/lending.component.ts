import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { LendingFindService } from '../services/finder/lending-find.service';
import { LendingUtilityService } from '../services/utils/lending-utility.service';
import { BaseLendingModel } from '../model/lending.model';
import { map, Observable } from 'rxjs';
import { ArrayUtilsService } from 'src/app/shared/utils/array-utils.service';


@Component({
  selector: 'app-books',
  templateUrl: 'lending.component.html',
})
export class LendingComponent implements OnInit {
  data$: Observable<Array<Array<string>>>;
  
  constructor(
    private readonly findSrv: LendingFindService,
    private readonly lendingUtilSrv: LendingUtilityService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly router: Router
  ) {}

  displayFail: boolean = false;
  displayStatusChange: boolean = false;
  errorMessage: string = '';
  header$: Observable<Array<string>>;

  ngOnInit(): void {
    this.data$ = this.findSrv.getLendings();
    this.header$ = this.findSrv.getLendingHeader();
  }

  closeAlert(alert: boolean) {
    this.displayFail = alert;
  }

  changeLendingStatus(lendingId: string) {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz zmienić status wypożyczenia o id: ${lendingId}?`,
      accept: () => {
        this.lendingUtilSrv.changeLendingStatus(lendingId);
        this.displayStatusChange = true;
        this.displayFail = true;
        this.errorMessage = 'Zmieniono status wypożyczenia';
      },
    });
  }

  deleteLending(lendingId: string) {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz usunąć wypożyczenie o id: ${lendingId}?`,
      accept: () => {
        this.lendingUtilSrv.deleteLending(lendingId);
        this.displayFail = true;
        this.errorMessage = 'Usunięto wypożyczenie';
      },
    });
  }

  editLending(lendingId: string) {
    this.router.navigate(['/edit-lending', lendingId]);
  }
}

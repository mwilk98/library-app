import { Injectable } from '@angular/core';
import { Lending } from '../lending/domain-model/lending.model';
import { LendingStoreService } from '../lending/store/lending-store.service';

@Injectable({ providedIn: 'root' })
export class LendingService {
  constructor(readonly lendingStoreSrv: LendingStoreService) {}

  changeLendingStatus(lendingId: string, statusValue: boolean): void {
      const lendingObj = this.lendingStoreSrv.getLending(lendingId);
      lendingObj.status = statusValue;
      this.lendingStoreSrv.updateLending(lendingId, lendingObj);
  }

  checkBookIfLent(bookId: string): boolean {
    return this.lendingStoreSrv.getLendings()
      .filter((lending) => lending.idBook === bookId)
      .some((lend) => lend.status);
  }
}

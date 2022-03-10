import { Injectable } from '@angular/core';
import { Lending } from '../lending/domain-model/lending.model';
import { LendingStoreService } from '../lending/store/lending-store.service';

@Injectable({ providedIn: 'root' })
export class LendingService {
  constructor(readonly lendingStoreSrv: LendingStoreService) {}

  changeLendingStatus(lendingId: string, statusValue: boolean): void {
      // pobierz lending po id
      // zmień status na statusValue
      // zaaktualizuj w store ten lending
  }

  checkBookIfLent(bookId: string): boolean {
    return Object.values(this.lendingStoreSrv.getLendings())
      .filter((lending) => lending.idBook === bookId)
      .find((lend) => lend.status)? true : false;
  }
}

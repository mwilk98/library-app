import { Injectable } from "@angular/core";
import { LendingStoreService } from "src/app/stores/lending-store.service";
import { Lending } from "../../domain-model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingUtilityService {
  constructor(private readonly storeSrv: LendingStoreService) {}

  addLending(newLending: Lending): void {
    this.storeSrv.addLending(newLending);
  }

  updateLending(idLending: string, newLending: Lending): void {
    this.storeSrv.updateLending(idLending, newLending);
  }

  deleteLending(idLending: string): void {
    this.storeSrv.deleteLending(idLending);
  }

  changeLendingStatus(lendingId: string, statusValue: boolean): void {
    const lendingObj = this.storeSrv.getLending(lendingId);
    lendingObj.status = statusValue;
    this.storeSrv.updateLending(lendingId, lendingObj);
  }

  bookStatusName(bookStatus: boolean) {
    return bookStatus ? 'Wypożyczona' : 'Oddana';
  }

  checkBookIfLent(bookId: string): boolean {
    return this.storeSrv
      .getLendings()
      .filter((lending) => lending.idBook === bookId)
      .some((lend) => lend.status);
  }
}
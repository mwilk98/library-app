import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { LendingStoreService } from "src/app/store/lending-store.service";
import { Lending } from "../../model/lending.model";


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

  changeLendingStatus(lendingId: string): void {
    const lendingObj = this.storeSrv.getLending(lendingId);
    lendingObj.status = !lendingObj.status;
    this.storeSrv.updateLending(lendingId, lendingObj);
  }

  bookStatusName(bookStatus: boolean) {
    return bookStatus ? 'Wypożyczona' : 'Oddana';
  }

  checkBookIfLent(bookId: string): boolean {
    let lendings = [];
    this.storeSrv.getLendings()
            .pipe(
                map(books => Object.values(books)
                    .filter(book => book.id === bookId))
            ).subscribe(bookList => lendings = Object.values(bookList));
    if (lendings.length === 0){
      return false
    }
    return true;
  }
}
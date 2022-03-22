import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { LendingStoreModel } from "src/app/store/model/base-store.model";
import { LendingStoreService } from "src/app/store/service/lending-store.service";
import { BaseLendingModel } from "../../model/lending.model";


@Injectable({ providedIn: 'root' })
export class LendingUtilityService {
  constructor(private readonly storeSrv: LendingStoreService) {}

  addLending(newLending: BaseLendingModel): void {
    this.storeSrv.addLending(newLending);
  }

  updateLending(idLending: string, newLending: BaseLendingModel): void {
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
  
  checkBookIfLent(bookId: string): boolean {
    let lendingsArr = [];
    this.storeSrv.getLendingList().pipe(
      map((lendings: LendingStoreModel) => Object.values(lendings)),
      map((lendings: Array<BaseLendingModel>) => {  
          lendings.forEach((lending: BaseLendingModel) => {
              if (lending.id === bookId) {
                  lendingsArr = lendings;
              } 
          });
      })
    ).subscribe(() => {});
    if (lendingsArr.length === 0){
      return false
    }
    return true;
  }
}
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { LendingStoreService } from "src/app/store/service/lending-store.service";
import { BaseLendingModel } from "../../model/lending.model";


@Injectable({ providedIn: 'root' })
export class LendingFindService {
  constructor(private readonly storeSrv: LendingStoreService) {}

  getLending(lendingId: string): BaseLendingModel {
    return this.storeSrv.getLending(lendingId);
  }

  getLendings(): Observable<Array<BaseLendingModel>>  {     
    return this.storeSrv.getLendingList().pipe(
      map(books => Object.values(books))
    );
  }

  getLendingHeader(): Observable<Array<string>> {
    return of(['#', 'Książka','Uczeń', 'Data Wypożyczenia', 'Status', 'Opcje']);
  }
}
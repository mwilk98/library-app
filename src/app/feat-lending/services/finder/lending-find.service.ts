import { Injectable } from "@angular/core";
import { LendingStoreService } from "src/app/store/service/lending-store.service";
import { BaseLendingModel } from "../../model/lending.model";


@Injectable({ providedIn: 'root' })
export class LendingFindService {
  constructor(private readonly storeSrv: LendingStoreService) {}

  getLending(lendingId: string): BaseLendingModel {
    return this.storeSrv.getLending(lendingId);
  }

  getLendings() {
    return this.storeSrv.getLendingList();
  }
}
import { Injectable } from "@angular/core";
import { LendingStoreService } from "src/app/stores/lending-store.service";
import { Lending } from "../../domain-model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingFindService {
  constructor(private readonly storeSrv: LendingStoreService) {}

  getLending(lendingId: string): Lending {
    return this.storeSrv.getLending(lendingId);
  }

  getLendings() {
    return this.storeSrv.getLendings();
  }
}
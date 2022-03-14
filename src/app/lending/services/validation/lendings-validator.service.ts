import { Injectable } from "@angular/core";
import { LendingStoreService } from "src/app/stores/lendings/lending-store.service";
import { StudentStoreService } from "../../../stores/students/student-store.service";
import { Lending } from "../../domain-model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingValidatorService {
    constructor(private readonly lendingStoreSrv: LendingStoreService) {
    }

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla studentów */
    idValidation(idLending: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idLending);
        const lendings: Array<Lending> = this.lendingStoreSrv.getLendings().filter(lending => lending.id === idLending);
        
        if (!baseValidation) { return false; }
        if (idLending === '') { return false; }
        if (lendings.length !== 0 ) { return false; }

        return true;
    }
}
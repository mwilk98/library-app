import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { LendingStoreService } from "../../../stores/lending-store.service";
import { Lending } from "../../domain-model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingValidatorService {
    constructor(private readonly lendingStoreSrv: LendingStoreService,
                @Inject(LOCALE_ID) private locale: string
                ) {}

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    emptyStringValidation(value: String): boolean {
        if (value === '') { return false; }
        return true;
    }

    dateValidation(value: Date): boolean {
        if (Object.keys(value).length === 0) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla wypożyczenia */
    idValidation(idLending: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idLending);
        const lendings: Array<Lending> = this.lendingStoreSrv.getLendings().filter(lending => lending.id === idLending);
        
        if (!baseValidation) { return false; }
        if (idLending === '') { return false; }
        if (lendings.length !== 0 ) { return false; }

        return true;
    }
}
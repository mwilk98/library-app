import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { LendingStoreService } from '../../../store/lending-store.service';
import { Lending } from '../../domain-model/lending.model';

/* serwis do walidacji danych wypożyczeń */
@Injectable({ providedIn: 'root' })
export class LendingValidatorService {
  constructor(private readonly lendingStoreSrv: LendingStoreService) {}

  /* serwis do walidacji danych wypożyczenia */
  baseValidation<TValue>(value: TValue): boolean {
    if (value === undefined) {
      return false;
    }
    return true;
  }

  /* sprawdza czy podany string jest pusty */
  emptyStringValidation(value: String): boolean {
    if (value === '') {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność wprowadzonej daty dla wypożyczenia */
  dateValidation(value: Date): boolean {
    if (Object.keys(value).length === 0) { return false; }
    return true;
  }

  /* Sprawdza poprawność i unikalność podanego id dla wypożyczenia */
  idValidation(idLending: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idLending);
    const lendings: Array<Lending> = this.lendingStoreSrv
      .getLendings()
      .filter((lending) => lending.id === idLending);

    if (!baseValidation) {
      return false;
    }
    if (idLending === '') {
      return false;
    }
    if (lendings.length !== 0) {
      return false;
    }
    return true;
  }
  idUniqueValidation(idLending: string): boolean {
    const lendings: Array<Lending> = this.lendingStoreSrv
      .getLendings()
      .filter((lending) => lending.id === idLending);
    if (lendings.length !== 0) {
      return false;
    }
    return true;
  }
}

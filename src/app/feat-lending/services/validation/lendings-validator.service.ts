import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LendingStoreModel } from 'src/app/store/model/base-store.model';
import { BaseLendingModel } from '../../model/lending.model';
import { LendingFindService } from '../finder/lending-find.service';

/* serwis do walidacji danych wypożyczeń */
@Injectable({ providedIn: 'root' })
export class LendingValidatorService {
  constructor(private readonly findSrv: LendingFindService) {}

  lendings: Array<BaseLendingModel> = [];

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
  dateValidation(value: string): boolean {
    if (Object.keys(value).length === 0) {
      return false;
    }
    return true;
  }

  /* Sprawdza poprawność i unikalność podanego id dla wypożyczenia */
  idValidation(idLending: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idLending);
    if (idLending === '') {
      return false;
    }
    if (!baseValidation) {
      return false;
    }
    return true;
  }

  idUniqueValidation(idLending: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idLending);
    if (idLending === '') {
      return false;
    }
    if (!baseValidation) {
      return false;
    }
    if (this.lendings.length !== 0) {
      return false;
    }
    return true;
  }
}

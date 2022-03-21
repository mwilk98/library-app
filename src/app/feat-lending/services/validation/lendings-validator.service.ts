import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LendingStoreService } from '../../../store/lending-store.service';
import { Lending } from '../../model/lending.model';
import { LendingFindService } from '../finder/lending-find.service';


/* serwis do walidacji danych wypożyczeń */
@Injectable({ providedIn: 'root' })
export class LendingValidatorService {
  constructor(private readonly lendingFindSrv: LendingFindService) {}

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
    if (idLending === '') { return false; }
    if (!baseValidation) { return false; }
    return true;
  }

  idUniqueValidation(idLending: string): boolean {
    const baseValidation: boolean = this.baseValidation<string>(idLending);
    let lendings: Array<Lending> = [];
    this.lendingFindSrv.getLendings()
            .pipe(
                map(books => Object.values(books)
                    .filter(book => book.id === idLending))
            ).subscribe(bookList => lendings = Object.values(bookList));
    if (idLending === '') { return false; }
    if (!baseValidation) { return false; }
    if (lendings.length !== 0 ) { return false; }
      return true;
  }
}

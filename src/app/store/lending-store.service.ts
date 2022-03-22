import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lending, LendingStore } from '../feat-lending/model/lending.model';

@Injectable({ providedIn: 'root' })
export class LendingStoreService {
  private lendings: LendingStore = {
    '1': { id: '1', idBook: '1', idStudent: '1', lendingDate: '2022-03-12' , status: true },
    '2': { id: '2', idBook: '2', idStudent: '2', lendingDate: '2022-03-12' , status: true },
    '3': { id: '3', idBook: '3', idStudent: '3', lendingDate: '2022-03-12' , status: false },
    '4': { id: '4', idBook: '4', idStudent: '4', lendingDate: '2022-03-12' , status: false }
  };

  getLending(lendingId: string): Lending {
    const lendingObj = Object.values(this.lendings).find(
      (lending: Lending) => lending.id === lendingId
    );
    if (lendingObj === undefined) {
      throw new Error(`Nie znaleziono wypożyczenia o podanym id: ${lendingId}`);
    }
    return lendingObj;
  }

  getLendings(): Observable<LendingStore> {
    return of(this.lendings);
  }

  addLending(newLending: Lending): Lending {
    newLending.status = true;
    this.lendings[this.generateKey(newLending)] = newLending;
    return newLending;
  }

  updateLending(idLending: string, newLending: Lending): Lending {
    this.lendings[idLending] = newLending;
    return newLending;
  }

  deleteLending(idLending: string): void {
    const newLendings: LendingStore = {};
    Object.values(this.lendings)
      .filter((lending: Lending) => lending.id !== idLending)
      .forEach((lending) => {
        newLendings[this.generateKey(lending)] = lending;
      });
    this.lendings = newLendings;
  }

  private generateKey(book: Lending): string {
    return Object.values(book).join('-');
  }
}

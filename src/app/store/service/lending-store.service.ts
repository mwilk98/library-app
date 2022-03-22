import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { BaseLendingModel } from 'src/app/feat-lending/model/lending.model';
import { LendingStoreModel } from '../model/base-store.model';


@Injectable({ providedIn: 'root' })
export class LendingStoreService {
  lendings: BehaviorSubject<LendingStoreModel> = new BehaviorSubject<LendingStoreModel>({
    '1': { id: '1', idBook: '1', idStudent: '1', lendingDate: '2022-03-12' , status: true },
    '2': { id: '2', idBook: '2', idStudent: '2', lendingDate: '2022-03-12' , status: true },
    '3': { id: '3', idBook: '3', idStudent: '3', lendingDate: '2022-03-12' , status: false },
    '4': { id: '4', idBook: '4', idStudent: '4', lendingDate: '2022-03-12' , status: false }
  });

  getLendingList(): Observable<LendingStoreModel> {
    return this.lendings.pipe(
      map((lendings: LendingStoreModel) => lendings)
    );
  }

  getLending(idLending: string): BaseLendingModel {
    let lendingObj! :BaseLendingModel;
    this.lendings.pipe(
      map((lendings: LendingStoreModel) => Object.values(lendings)),
      map((lendings: Array<BaseLendingModel>) => {
        lendings.forEach((lending: BaseLendingModel) => {
          if (lending.id === idLending) {
            lendingObj = lending;
          }
        });
      })
    )
    .subscribe(() => {})
    .unsubscribe();
    
    return lendingObj;  
  }

  addLending(newLending: BaseLendingModel): BaseLendingModel {
    this.lendings.pipe(
      map((lendings: LendingStoreModel) => Object.values(lendings)),
      map((lendings: Array<BaseLendingModel>) => {
        const newLendings: LendingStoreModel = {};
        lendings.forEach((lending: BaseLendingModel) => {
          newLendings[this.generateKey(lending)] = lending;
        });
        newLending.status = true;
        newLendings[this.generateKey(newLending)] = newLending;
        return newLendings;
      }),
      tap((newLendings: LendingStoreModel) => this.lendings.next(newLendings))
    )
    .subscribe(() => {})
    .unsubscribe();
    return newLending;
  }

  updateLending(idLending: string, newLending: BaseLendingModel): BaseLendingModel {
    this.lendings.pipe(
      map((lendings: LendingStoreModel) => Object.values(lendings)),
      map((lendings: Array<BaseLendingModel>) => {
        const newLendings: LendingStoreModel = {};
        lendings.forEach((lending: BaseLendingModel) => {
          if (lending.id !== idLending) {
            newLendings[this.generateKey(lending)] = lending;
          } else {
            newLending.status = true;
            newLendings[this.generateKey(lending)] = newLending;
          }
        });
        return newLendings;
      }),
      tap((newBooks: LendingStoreModel) => this.lendings.next(newBooks))
    )
    .subscribe(() => {})
    .unsubscribe();
    return newLending;
  }

  deleteLending(idLending: string): void {
    this.lendings.pipe(
      map((lendings: LendingStoreModel) => Object.values(lendings)),
      map((lendings: Array<BaseLendingModel>) => {
        const newLendings: LendingStoreModel = {};
        lendings.forEach((lending: BaseLendingModel) => {
          if (lending.id !== idLending) {
            newLendings[this.generateKey(lending)] = lending;
          }
        });
        return newLendings;
      }),
      tap((newLendings: LendingStoreModel) => this.lendings.next(newLendings))
    )
    .subscribe(() => {})
    .unsubscribe();
  }

  private generateKey(book: BaseLendingModel): string {
    return Object.values(book).join('-');
  }
}

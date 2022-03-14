import { Injectable } from '@angular/core';
import { BookService } from 'src/app/books/services/book.service';
import { StudentService } from 'src/app/students/services/students.service';
import { LendingStoreService } from '../../stores/lendings/lending-store.service';
import { Lending } from '../domain-model/lending.model';

@Injectable({ providedIn: 'root' })
export class LendingService {
  constructor(readonly lendingStoreSrv: LendingStoreService,
              readonly studentSrv: StudentService
  ) {}

  getLending(lendingId: string) : void {
    this.lendingStoreSrv.getLending(lendingId);
  }

  getLendings() {
    return this.lendingStoreSrv.getLendings();
  }

  addLending(newLending: Lending): void {
    this.lendingStoreSrv.addLending(newLending);
  }

  updateLending(idLending: string, newLending: Lending): void {
    this.lendingStoreSrv.updateLending(idLending,newLending);
  }

  deleteLending(idLending: string): void {
    this.lendingStoreSrv.deleteLending(idLending);
  }

  changeLendingStatus(lendingId: string, statusValue: boolean): void {
      const lendingObj = this.lendingStoreSrv.getLending(lendingId);
      lendingObj.status = statusValue;
      this.lendingStoreSrv.updateLending(lendingId, lendingObj);
  }

  checkBookIfLent(bookId: string): boolean {
    return this.lendingStoreSrv.getLendings()
      .filter((lending) => lending.idBook === bookId)
      .some((lend) => lend.status);
  }
}

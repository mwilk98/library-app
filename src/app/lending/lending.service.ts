import { Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { Student } from '../students/student.model';
import { Lending } from './domain-model/lending.model';

@Injectable({ providedIn: 'root' })
export class LendingService {
  sharedBooks: Array<Book> = [];
  sharedLending: Array<Lending> = [];

  checkLendingBook(bookId: string): boolean {
      return this.sharedLending
        .filter(lend => lend.idBook === bookId)
        .find(lend => lend.status) ? true : false;
  }

  setLending(data: Array<Lending>) {
    this.sharedLending = data;
  }
  getLending() {
    return this.sharedLending;
  }
}

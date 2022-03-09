import { Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { Student } from '../students/student.model';
import { Lending } from './domain-model/lending.model';

@Injectable({ providedIn: 'root' })
export class LendingService {
  sharedBooks: Array<Book> = [];
  sharedStudents: Array<Student> = [];
  sharedLending: Array<Lending> = [];

  checkLendingBook(bookId: string): boolean {
      return this.sharedLending
        .filter(lend => lend.idBook === bookId)
        .find(lend => lend.status) ? true : false;
  }

  setBook(data: Array<Book>) {
    this.sharedBooks = data;
  }
  setStudent(data: Array<Student>) {
    this.sharedStudents = data;
  }
  setLending(data: Array<Lending>) {
    this.sharedLending = data;
  }
  getBook() {
    return this.sharedBooks;
  }
  getStudent() {
    return this.sharedStudents;
  }
  getLending() {
    return this.sharedLending;
  }
}

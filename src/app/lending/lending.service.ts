import { Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { Student } from '../students/student.model';

@Injectable({ providedIn: 'root' })
export class LendingService {
  sharedBooks: Array<Book> = [];
  sharedStudents: Array<Student> = [];

  setBook(data: Array<Book>) {
    this.sharedBooks = data;
  }
  setStudent(data: Array<Student>) {
    this.sharedStudents = data;
  }
  getBook() {
    return this.sharedBooks;
  }
  getStudent() {
    return this.sharedStudents;
  }
}

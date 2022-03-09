import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';
import { Student } from '../students/student.model';
import { Lending } from './domain-model/lending.model';
import { LendingService } from './lending.service';

@Component({
  selector: 'app-books',
  templateUrl: './lending.component.html',
})
export class LendingComponent implements OnInit {
  constructor(private shared: LendingService) {}

  formVisible = false;

  sharedBooks: Array<Book> = [];
  sharedStudents: Array<Student> = [];
  avalibleBooks: Array<Book> = [];

  public lending: Array<Lending> = [
    { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
    { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: true },
    { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: false },
    { id: '4', idBook: '4', idStudent: '4', lendingDate: new Date(), status: false },
    { id: '5', idBook: '5', idStudent: '5', lendingDate: new Date(), status: true },
  ];


  deleteBook(lend: Lending) {
    this.lending = this.lending.filter((item) => item !== lend);
  }

  onSubmit(data: Lending) {
    data.status = true;
    this.lending.push(data);
  }

  changeStatus(data: Lending) {
    data.status = !data.status;
    for (var i = 0; i < this.sharedBooks.length; i++) {
      if (this.sharedBooks[i].id === data.id) {
        this.avalibleBooks.push(this.sharedBooks[i]);
      }
    }
  }

  onShowForm(){
    this.formVisible=!this.formVisible;
  }

  ngOnInit(): void {
    this.sharedBooks = this.shared.getBook();
    this.sharedStudents = this.shared.getStudent();
    for (var i = 0; i < this.sharedBooks.length; i++) {
      if (
        this.sharedBooks[i].id === this.lending[i].idBook &&
        !this.lending[i].status
      ) {
        this.avalibleBooks.push(this.sharedBooks[i]);
      }
    }
  }
}

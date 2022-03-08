import { Component, OnInit } from '@angular/core';
import { Lending } from './lending.model';
import { LendingService } from './lending.service';

@Component({
  selector: 'app-books',
  templateUrl: './lending.component.html',
})
export class LendingComponent implements OnInit {
  constructor(private shared: LendingService) {}
  message = '';

  public lending: Array<Lending> = [
    { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
    { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: false },
    { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: true },
    { id: '4', idBook: '4', idStudent: '4', lendingDate: new Date(), status: true },
    { id: '5', idBook: '5', idStudent: '5', lendingDate: new Date(), status: true },
  ];

  deleteBook(book: Lending) {
    this.lending = this.lending.filter((item) => item !== book);
  }

  onSubmit(data: Lending) {
    data.status = true;
    this.lending.push(data);
  }

  changeStatus(data: Lending) {
    data.status = !data.status;
  }

  ngOnInit(): void {
    this.message = this.shared.getMessage();
  }
}

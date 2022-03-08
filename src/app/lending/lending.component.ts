import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';
import { Student } from '../students/student.model';
import { Lending } from './lending.model';
import { LendingService } from './lending.service';

@Component({
  selector: 'app-books',
  templateUrl: './lending.component.html',
})
export class LendingComponent implements OnInit {
  constructor(private shared: LendingService) {}

  sharedBooks: Array<Book> = [];
  sharedStudents: Array<Student> = [];

  public lending: Array<Lending> = [
    { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
    { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: true },
    { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: true },
    { id: '4', idBook: '4', idStudent: '4', lendingDate: new Date(), status: true },
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
    for(let i=0; i<this.sharedBooks.length;i++){
      console.log("Lending id:"+this.lending[i].idBook);
      console.log("Books id:"+this.sharedBooks[i].id);
      console.log(this.lending[i].status);
      if(this.lending[i].idBook===this.sharedBooks[i].id && this.lending[i].status===true){
        console.log("ZGODNOSC"); 
        this.sharedBooks = this.sharedBooks.filter((item) => item !== this.sharedBooks[i]);
      }
    }
  }

  ngOnInit(): void {
    this.sharedBooks = this.shared.getBook();
    this.sharedStudents = this.shared.getStudent();
  }
}

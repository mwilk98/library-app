import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../books/book-store.service';
import { Book } from '../books/book.model';
import { StudentStoreService } from '../students/student-store.service';
import { Student } from '../students/student.model';
import { Lending } from './domain-model/lending.model';
import { LendingStoreService } from './lending-store.service';
import { LendingService } from './lending.service';

@Component({
  selector: 'app-books',
  templateUrl: './lending.component.html',
})
export class LendingComponent implements OnInit {
  constructor(
    private shared: LendingService,
    private lendingStoreService: LendingStoreService,
    private studentStoreService: StudentStoreService,
    private booksStoreService: BookStoreService
  ) {}

  formVisible = false;
  sharedStudents: Array<Student> = [];
  avalibleBooks: Array<Book> = [];
  EditRowID: string = '';
  buttonFormText = 'Dodaj';

  public lending: Array<Lending> = [];

  deleteLending(lend: Lending) {
    this.changeStatus(lend);
    this.lending = this.lending.filter((item) => item !== lend);
    this.lendingStoreService.changeLending(this.lending);
  }

  onSubmit(lend: Lending) {
    lend.status = true;
    this.lending.push(lend);
    alert('Dodano wypożyczenie');
  }

  changeStatus(lend: Lending) {
    lend.status = !lend.status;
    this.addAvalibleBook(lend);
  }

  addAvalibleBook(lend: Lending) {
    this.shared.sharedBooks.forEach((value: Book) => {
      if (!this.shared.checkLendingBook(value.id) && value.id === lend.idBook) {
        this.avalibleBooks.push(value);
      }
    });
  }

  onShowForm() {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  }

  Edit(val: string) {
    this.EditRowID = val;
  }

  newMessage() {
    this.lendingStoreService.changeLending(this.lending);
  }

  onCancelEdit() {
    this.EditRowID = '';
  }

  ngOnInit(): void {
    this.lendingStoreService.currentLending.subscribe(
      (lending) => (this.lending = lending)
    );
    this.studentStoreService.currentStudents.subscribe(
      (student) => (this.sharedStudents = student)
    );
    this.booksStoreService.currentBooks.subscribe(
      (book) => (this.shared.sharedBooks = book)
    );

    this.shared.setLending(this.lending);

    this.shared.sharedBooks.forEach((value: Book) => {
      if (!this.shared.checkLendingBook(value.id)) {
        this.avalibleBooks.push(value);
      }
    });
  }
}

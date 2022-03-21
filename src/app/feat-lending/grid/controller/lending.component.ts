import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService } from 'primeng/api';

import { LendingUtilityService } from '../../services/utils/lending-utility.service';
import { LendingFindService } from '../../services/finder/lending-find.service';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { Lending } from '../../model/lending.model';
import { Student } from 'src/app/feat-students/model/student.model';
import { Book } from 'src/app/feat-books/model/book.model';

@Component({
  selector: 'app-books',
  templateUrl: 'lending.component.html',
})
export class LendingComponent implements OnInit {
  constructor(
    private readonly lendingFindSrv: LendingFindService,
    private readonly lendingUtilSrv: LendingUtilityService,
    private readonly bookFindSrv: BookFindService,
    private readonly studentFindSrv: StudentFindService,
    private readonly confirmationSrv: ConfirmationService,
    private readonly _router: Router
  ) {}

  lendings: Array<Lending> = [];
  students: Array<Student> = [];
  books: Array<Book> = [];
  displayFail: boolean = false;
  displayStatusChange: boolean = false;
  errorMessage: string = '';
  header: Array<string> = [
    '#',
    'Książka',
    'Uczeń',
    'Data Wypożyczenia',
    'Status',
    'Opcje'
  ]

  ngOnInit(): void {
    this.lendings = this.lendingFindSrv.getLendings();
    this.students = this.studentFindSrv.getStudents();
    this.bookFindSrv.getBooks().subscribe(bookList => this.books = Object.values(bookList));
    this.books.forEach(book => {
      this.refactorBookData(book.id,book);
    });
    this.students.forEach(student => {
      this.refactorStudentData(student.id,student);
    });
  }

  refactorBookData(id: string, book : Book) {
    this.lendings.forEach(lending => {
      if (lending.idBook === id){
        lending.idBook = `${book.title} ${book.author}`;
      }
    })
  }

  refactorStudentData(id: string, student : Student) {
    this.lendings.forEach(lending => {
      if (lending.idStudent === id){
        lending.idStudent = `${student.name} ${student.surname}`;
      }
    })
  }

  closeAlert(alert: boolean) {
    this.displayFail = alert;
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this._router.navigate([currentUrl]);
  });
  }

  changeLendingStatus(lendingId: string) {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz zmienić status wypożyczenia o id: ${lendingId}?`,
      accept: () => {
        this.lendingUtilSrv.changeLendingStatus(lendingId);
        this.displayStatusChange = true;
        this.displayFail = true;
        this.errorMessage = 'Zmieniono status wypożyczenia';
      },
    });
  }

  deleteLending(lendingId: string) {
    this.confirmationSrv.confirm({
      message: `Czy na pewno chcesz usunąć wypożyczenie o id: ${lendingId}?`,
      accept: () => {
        this.lendingUtilSrv.deleteLending(lendingId);
        this.lendings = this.lendingFindSrv.getLendings();
        this.displayFail = true;
        this.errorMessage = 'Usunięto książkę';
      },
    });
  }

  editLending(lendingId: string) {
    this._router.navigate(['/edit-lending', lendingId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Lending } from '../domain-model/lending.model';
import { Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { Book } from 'src/app/books/domain-model/book.model';
import { ConfirmationService } from 'primeng/api';
import { StudentFindService } from 'src/app/students/services/finder/student-find.service';
import { BookFindService } from 'src/app/books/services/finder/book-find.service';
import { LendingFindService } from '../services/finder/lending-find.service';
import { LendingUtilityService } from '../services/utils/lending-utility.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/lending.component.html',
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

  ngOnInit(): void {
    this.lendings = this.lendingFindSrv.getLendings();
    this.students = this.studentFindSrv.getStudents();
    this.books = this.bookFindSrv.getBooks();
  }

  closeAlert(alert: boolean) {
    this.displayFail = alert;
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

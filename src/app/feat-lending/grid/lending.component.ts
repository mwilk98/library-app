import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { Student } from 'src/app/feat-students/model/student.model';
import { BaseBookModel } from 'src/app/feat-books/model/book.model';
import { LendingFindService } from '../services/finder/lending-find.service';
import { LendingUtilityService } from '../services/utils/lending-utility.service';
import { LendingRefactorService } from '../services/refactor/lending-refactor.service';
import { Lending } from '../model/lending.model';


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
    private readonly refactorSrv: LendingRefactorService,
    private readonly _router: Router
  ) {}

  lendings: Array<Lending> = [];
  students: Array<Student> = [];
  books: Array<BaseBookModel> = [];
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
    this.lendingFindSrv.getLendings().subscribe(lendingList => this.lendings = Object.values(lendingList));
    this.studentFindSrv.getStudents().subscribe(studentList => this.students = Object.values(studentList));
    this.bookFindSrv.getBooks().subscribe(bookList => this.books = Object.values(bookList));
    this.books.forEach(book => {
      this.refactorSrv.refactorBookData(book.id,book,this.lendings);
    });
    this.students.forEach(student => {
      this.refactorSrv.refactorStudentData(student.id,student,this.lendings);
    });
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
        this.displayFail = true;
        this.errorMessage = 'Usunięto wypożyczenie';
      },
    });
  }

  editLending(lendingId: string) {
    this.books.forEach(book => {
      this.refactorSrv.refactorBackBookData(book,this.lendings);
    });
    this.students.forEach(student => {
      this.refactorSrv.refactorBackStudentData(student,this.lendings);
    });
    this._router.navigate(['/edit-lending', lendingId]);
  }
}

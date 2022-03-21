import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Book } from 'src/app/feat-books/model/book.model';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { LendingFindService } from 'src/app/feat-lending/services/finder/lending-find.service';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
})
export class FrontPageComponent implements OnInit {
  constructor(
    private readonly findBookSrv: BookFindService,
    private readonly findStudentSrv: StudentFindService,
    private readonly lendingFindSrv: LendingFindService
  ) {}

  bookCounter: number = 0;
  studentCounter: number = 0;
  lendingCounter: number = 0;

  ngOnInit(): void {
    this.findBookSrv.getBooks().subscribe(books => this.bookCounter = Object.values(books).length);
    this.findStudentSrv.getStudents().subscribe(students => this.studentCounter = Object.values(students).length);
    this.lendingFindSrv.getLendings().subscribe(lendingList => this.lendingCounter = Object.values(lendingList).length);
  }
}

import { Component, OnInit } from '@angular/core';
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
  data: any;
  chartOptions: any;



  ngOnInit(): void {
    this.findBookSrv.getBooks().subscribe(books => this.bookCounter = Object.values(books).length);
    this.findStudentSrv.getStudents().subscribe(students => this.studentCounter = Object.values(students).length);
    this.lendingFindSrv.getLendings().subscribe(lendingList => this.lendingCounter = Object.values(lendingList).length);
    this.data = {
      labels: ['Książki','uczniowie','Wypożyczenia'],
      datasets: [
          {
              data: [this.bookCounter, this.studentCounter, this.lendingCounter],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  };
  }
}

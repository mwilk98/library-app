import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookFindService } from 'src/app/feat-books/services/finder/book-find.service';
import { LendingFindService } from 'src/app/feat-lending/services/finder/lending-find.service';
import { StudentFindService } from 'src/app/feat-students/services/finder/student-find.service';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
})
export class FrontPageComponent implements OnInit {
  constructor(
    private readonly findBookSrv: BookFindService,
    private readonly findStudentSrv: StudentFindService,
    private readonly lendingFindSrv: LendingFindService,
    private readonly counterSrv: CounterService
  ) {}

  bookCounter: number = 0;
  bookCounter$: Observable<number>;
  studentCounter: number = 0;
  studentCounter$: Observable<number>;
  lendingCounter: number = 0;
  lendingCounter$: Observable<number>;
  data: any;
  chartOptions: any;

  ngOnInit(): void {
    this.bookCounter$ = this.counterSrv.getBookCount();
    this.studentCounter$ = this.counterSrv.getStudentCount();
    this.lendingCounter$ = this.counterSrv.getLendingCount();
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

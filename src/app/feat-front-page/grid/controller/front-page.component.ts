import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
})
export class FrontPageComponent implements OnInit {
  constructor(private readonly countSrv: CounterService) {}

  bookCounter: number = 0;
  studentCounter: number = 0;
  lendingCounter: number = 0;
  data: any;
  chartOptions: any;
  pieChartData: [number,number,number]

  ngOnInit(): void {
    this.bookCounter = this.countSrv.getBookCount();
    this.studentCounter = this.countSrv.getStudentCount();
    this.lendingCounter = this.countSrv.getLendingCount();

    this.pieChartData = [this.bookCounter, this.studentCounter, this.lendingCounter],

    this.data = {
      labels: ['Książki','uczniowie','Wypożyczenia'],
      datasets: [
        {
          data: this.pieChartData,
          backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
          hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"]
        }
      ]
    };
  }
}

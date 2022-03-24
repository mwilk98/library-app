import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../feat-front-page/service/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private readonly counterSrv: CounterService) {}

  bookCounter$: Observable<number>;
  studentCounter$: Observable<number>;
  lendingCounter$: Observable<number>;
  ngOnInit() {
    this.bookCounter$ = this.counterSrv.getBookCount();
    this.studentCounter$ = this.counterSrv.getStudentCount();
    this.lendingCounter$ = this.counterSrv.getLendingCount();
  }
}

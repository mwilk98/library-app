import { Injectable } from "@angular/core";
import { BookFindService } from "src/app/feat-books/services/finder/book-find.service";
import { LendingFindService } from "src/app/feat-lending/services/finder/lending-find.service";
import { StudentFindService } from "src/app/feat-students/services/finder/student-find.service";

@Injectable({ providedIn: 'root' })
/* serwis do obsługi pobrania danych książki */
export class CounterService {
  constructor(
    private readonly findBookSrv: BookFindService,
    private readonly findStudentSrv: StudentFindService,
    private readonly lendingFindSrv: LendingFindService
  ) {}
  
  private bookCounter: number = 0;
  private studentCounter: number = 0;
  private lendingCounter: number = 0;

  getBookCount() {
    this.findBookSrv.getBooks().subscribe((books : any) => this.bookCounter = Object.values(books).length);
    return this.bookCounter;
  }

  getStudentCount() {
    this.findStudentSrv.getStudents().subscribe(students => this.studentCounter = Object.values(students).length);
    return this.studentCounter;
  }

  getLendingCount() {
    this.lendingFindSrv.getLendings().subscribe(lendingList => this.lendingCounter = Object.values(lendingList).length);
    return this.lendingCounter;
  }
}
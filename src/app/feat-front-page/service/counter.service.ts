import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { BaseBookModel } from "src/app/feat-books/model/book.model";
import { BookFindService } from "src/app/feat-books/services/finder/book-find.service";
import { BaseLendingModel } from "src/app/feat-lending/model/lending.model";
import { LendingFindService } from "src/app/feat-lending/services/finder/lending-find.service";
import { BaseStudentModel } from "src/app/feat-students/model/student.model";
import { StudentFindService } from "src/app/feat-students/services/finder/student-find.service";
import { ArrayUtilsService } from "src/app/shared/utils/array-utils.service";

@Injectable({ providedIn: 'root' })
/* serwis do obsługi pobrania danych książki */
export class CounterService {
  constructor(
    private readonly findBookSrv: BookFindService,
    private readonly findStudentSrv: StudentFindService,
    private readonly findLendingSrv: LendingFindService,
  ) {}
  getBookCount() {
    return this.findBookSrv.getBooks().pipe(
      map(books => Object.values(books)),
      map(books => books.map(books => Object.values(books)).length)
    );
  }

  getStudentCount() {
    return this.findStudentSrv.getStudents().pipe(
      map(books => Object.values(books)),
      map(books => books.map(books => Object.values(books)).length)
    );
  }

  getLendingCount() {
    return this.findLendingSrv.getLendings().pipe(
      map(books => Object.values(books)),
      map(books => books.map(books => Object.values(books)).length)
    );
  }
}
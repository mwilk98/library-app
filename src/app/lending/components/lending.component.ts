import { Component, OnInit } from '@angular/core';
import { LendingService } from '../services/lending.service';
import { Lending } from '../domain-model/lending.model';
import { Router } from '@angular/router';
import { Student } from 'src/app/students/domain-models/student.model';
import { Book } from 'src/app/books/domain-model/book.model';
import { BookService } from 'src/app/books/services/book.service';
import { ConfirmationService } from 'primeng/api';
import { StudentFindService } from 'src/app/students/services/finder/student-find.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/lending.component.html',
})
export class LendingComponent implements OnInit{
  constructor(
    readonly lendingSrv: LendingService,
    private bookSrv: BookService,
    readonly studentFindSrv: StudentFindService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) {}

  lendings: Array<Lending> = [];
  students: Array<Student> = [];
  books: Array<Book> = [];
  displayBasic: boolean = false;
  displayStatusChange: boolean = false;

  ngOnInit(): void {
    this.lendings = this.lendingSrv.getLendings();
    this.students = this.studentFindSrv.getStudents();    
    this.books = this.bookSrv.getBooks();  
  }

  changeLendingStatus(lendingId: string) {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz zmienić status wypożyczenia o id: ${lendingId}?`,
      accept: () => {
        this.lendingSrv.changeLendingStatus(lendingId, false)
        this.displayStatusChange = true; 
      }
  });
  }

  deleteLending(lendingId: string) {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz usunąć wypożyczenie o id: ${lendingId}?`,
      accept: () => {
        this.lendingSrv.deleteLending(lendingId);
        this.lendings = this.lendingSrv.getLendings();
        this.displayBasic = true; 
      }
  });
  }

  editLending(lendingId: string) {
    this._router.navigate(['/edit-lending', lendingId])
  }

}

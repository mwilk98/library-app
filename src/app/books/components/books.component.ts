import { Component} from '@angular/core';
import { Book } from '../domain-model/book.model';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BookFindService } from '../services/finder/book-find.service';
import { BookUtilityService } from '../services/utils/book-utility.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/books.component.html',
})
export class BooksComponent{
  constructor(
    readonly bookFindSrv: BookFindService,
    readonly bookUtilSrv: BookUtilityService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) {
  }

  books: Array<Book> = []
  displayFail: boolean = false;
  errorMessage: string = ''
  
  ngOnInit(): void {
    this.books = this.bookFindSrv.getBooks();    
  }
  
  closeAlert(alert: boolean) {
    this.displayFail = alert;
  }

  deleteBook(bookId: string): void {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz usunąć książke o id: ${bookId}?`,
      accept: () => {
        this.displayFail = this.bookUtilSrv.deleteBook(bookId)
        this.errorMessage = 'Nie można usunąć książki - istnieje wypożyczenie';
        if(!this.displayFail){
          this.books = this.bookFindSrv.getBooks();
          this.displayFail = true;
          this.errorMessage = 'Usunięto książkę'; 
        } 
      }
    }); 
  }
  
  editBook(bookId: string) {
    this._router.navigate(['/edit-book',bookId])
  }
}
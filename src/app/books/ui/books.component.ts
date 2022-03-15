import { Component} from '@angular/core';
import { Book } from '../domain-model/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/books.component.html',
})
export class BooksComponent{
  constructor(
    readonly bookSrv:BookService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) {
  }

  books: Array<Book> = []
  displayFail: boolean = false;

  errorMessage: string = ''
  
  ngOnInit(): void {
    this.books = this.bookSrv.getBooks();    
  }
  closeAlert(alert: boolean) {
    this.displayFail = alert;
  }

  deleteBook(bookId: string): void {
    this.confirmationService.confirm({
      message: `Czy na pewno chcesz usunąć książke o id: ${bookId}?`,
      accept: () => {
        this.displayFail = this.bookSrv.deleteBook(bookId)
        this.errorMessage = 'Nie można usunąć książki - istnieje wypożyczenie';
        if(!this.displayFail){
          this.books = this.bookSrv.getBooks();
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

import { Injectable } from "@angular/core";
import { LendingUtilityService } from "src/app/feat-lending/services/utils/lending-utility.service";
import { BookStoreService } from "src/app/store/book-store.service";
import { Book } from "../../model/book.model";

/* serwis do obsługi edycji danych książki */
@Injectable({ providedIn: 'root' })
export class BookUtilityService{
    constructor(
        private readonly storeSrv: BookStoreService,
        private readonly lendingUtilSrv: LendingUtilityService
    ) {}

    deleteBook(bookId:string): boolean {
        if (this.lendingUtilSrv.checkBookIfLent(bookId)) {
            return true;
        }
          this.storeSrv.deleteBook(bookId);
          return false;
    }
    
    addBook(newBook: Book): void {
        this.storeSrv.addBook(newBook);
    }

    updateBook(bookId: string, newBook: Book): void {
        this.storeSrv.updateBook(bookId,newBook);
    }
    
}

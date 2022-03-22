import { Injectable } from "@angular/core";
import { LendingUtilityService } from "src/app/feat-lending/services/utils/lending-utility.service";
import { BookStoreService } from "src/app/store/book-store.service";
import { BaseBookModel } from "../../model/book.model";

@Injectable({ providedIn: 'root' })
/* serwis do obsługi edycji danych książki */
export class BookUtilityService {
    constructor(
        private readonly storeSrv: BookStoreService,
        private readonly lendingUtilSrv: LendingUtilityService
    ) {}

    deleteBook(bookId:string): boolean {
        if (this.lendingUtilSrv.checkBookIfLent(bookId)) { return false; }
        this.storeSrv.deleteBook(bookId);
        return true;
    }
    
    addBook(newBook: BaseBookModel): void {
        this.storeSrv.addBook(newBook);
    }

    updateBook(bookId: string, newBook: BaseBookModel): void {
        this.storeSrv.updateBook(bookId, newBook);
    }
}

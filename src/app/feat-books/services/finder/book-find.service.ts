import { Injectable } from "@angular/core";
import { BooksStoreModel } from "../../../store/model/base-store.model";
import { BookStoreService } from "../../../store/book-store.service";
import { BaseBookModel } from "../../model/book.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
/* serwis do obsługi pobrania danych książki */
export class BookFindService {
    constructor(private readonly storeSrv: BookStoreService) {}

    // todo: przerobić na obserwowalnie
    getBook(bookId: string): BaseBookModel {
        return this.storeSrv.getBook(bookId);
    }

    getBooks(): Observable<BooksStoreModel> {     
        return this.storeSrv.getBookList();
    }
}
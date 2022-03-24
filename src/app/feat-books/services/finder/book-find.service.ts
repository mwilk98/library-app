import { Injectable } from "@angular/core";
import { BooksStoreModel } from "../../../store/model/base-store.model";
import { BookStoreService } from "../../../store/service/book-store.service";
import { BaseBookModel } from "../../model/book.model";
import { map, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
/* serwis do obsługi pobrania danych książki */
export class BookFindService {
    constructor(private readonly storeSrv: BookStoreService) {}

    getBook(bookId: string): BaseBookModel {
        return this.storeSrv.getBook(bookId);
    }

    getBooks(): Observable<Array<Array<string>>> {     
        return this.storeSrv.getBookList().pipe(
            map(books => Object.values(books)),
            map(books => books.map(books => Object.values(books)))
        );
    }

    getBookHeaders(): Observable<Array<string>> {
        return of(['#', 'Tytuł', 'Autor', 'Gatunek', 'Data Wydania', 'Opcje'])
    }
}
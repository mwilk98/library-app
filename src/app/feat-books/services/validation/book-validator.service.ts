import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { BooksStoreModel } from "src/app/store/model/base-store.model";
import { BaseBookModel } from "../../model/book.model";
import { BookFindService } from "../finder/book-find.service";

/* serwis do obsługi walidacji danych książki */
@Injectable({ providedIn: 'root' })
export class BookValidatorService {
    constructor(private readonly findSrv: BookFindService) {}

    books: Array<BaseBookModel> = [];

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla studentów */
    idUniqueValidation(idBook: string): boolean {
        this.findSrv.getBooks().pipe(
            map((books: BooksStoreModel) => Object.values(books)),
            map((books: Array<BaseBookModel>) => {  
                books.forEach((book: BaseBookModel) => {
                    if (book.id === idBook) {
                        this.books = books;
                    } 
                });
            })
          ).subscribe(() => {});
        const baseValidation: boolean = this.baseValidation<string>(idBook);
        if (idBook === '') { return false; }
        if (!baseValidation) { return false; }
        if (this.books.length !== 0 ) { return false; }
        return true;
    }
    idValidation(idBook: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idBook);
        if (idBook === '') { return false; }
        if (!baseValidation) { return false; }
        return true;
    }

    /* Sprawdza poprawność daty dla książki*/
    dateValidation(value: string): boolean {
        if (Object.keys(value).length === 0) { return false; }
        return true;
    }

    /* Sprawdza poprawność danych dla książki*/
    dataValidation(book: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(book);
        const nameValidation = new RegExp("^[a-zA-Z][a-zA-Z .,'-]*$");
        if (!baseValidation) { return false; }
        if (book === '') { return false; }
        if (!nameValidation.test(book)) { return false; }
        return true;
    }
    private generateKey(book: BaseBookModel): string {
        return Object.values(book).join('-');
      }
}
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Book } from "../../model/book.model";
import { BookFindService } from "../finder/book-find.service";


/* serwis do obsługi walidacji danych książki */
@Injectable({ providedIn: 'root' })
export class BookValidatorService {
    constructor(private readonly findSrv: BookFindService) {}

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla studentów */
    idUniqueValidation(idBook: string): boolean {
        let books: Array<Book> = []
        this.findSrv.getBooks()
            .pipe(
                map(books => Object.values(books)
                    .filter(book => book.id === idBook))
            ).subscribe(bookList => books = Object.values(bookList));
        console.log(books);
        const baseValidation: boolean = this.baseValidation<string>(idBook);
        if (idBook === '') { return false; }
        if (!baseValidation) { return false; }
        if (books.length !== 0 ) { return false; }
        return true;
    }
    idValidation(idBook: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idBook);
        if (idBook === '') { return false; }
        if (!baseValidation) { return false; }
        return true;
    }

    /* Sprawdza poprawność daty dla książki*/
    dateValidation(value: Date): boolean {
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
}
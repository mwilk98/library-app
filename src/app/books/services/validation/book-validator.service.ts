import { Injectable } from "@angular/core";
import { BookStoreService } from "src/app/stores/book-store.service";
import { Book } from "../../domain-model/book.model";

/* serwis do obsługi walidacji danych książki */
@Injectable({ providedIn: 'root' })
export class BookValidatorService {
    constructor(private readonly storeSrv: BookStoreService) {}

    baseValidation<TValue>(value: TValue): boolean {
        if (value === undefined) { return false; }
        return true;
    }

    /* Sprawdza poprawność i unikalność podanego id dla studentów */
    idValidation(idBook: string): boolean {
        const baseValidation: boolean = this.baseValidation<string>(idBook);
        const students: Array<Book> = this.storeSrv.getBooks().filter(book => book.id === idBook);
        
        if (!baseValidation) { return false; }
        if (idBook === '') { return false; }
        if (students.length !== 0 ) { return false; }

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
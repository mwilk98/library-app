import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Book } from "./book.model";

@Injectable({ providedIn: 'root' })
export class BookStoreService {

    private booksSource = new BehaviorSubject<Array<Book>>([
        { id: '1', title: 'title 1', author: 'author 1', type: 'gatunek 1', releaseDate: new Date() },
        { id: '2', title: 'title 2', author: 'author 2', type: 'gatunek 2', releaseDate: new Date() },
        { id: '3', title: 'title 3', author: 'author 3', type: 'gatunek 3', releaseDate: new Date() },
        { id: '4', title: 'title 4', author: 'author 4', type: 'gatunek 4', releaseDate: new Date() },
        { id: '5', title: 'title 5', author: 'author 5', type: 'gatunek 5', releaseDate: new Date() }
    ]);

    currentBooks = this.booksSource.asObservable();

    constructor(){}

    changeBooks(book: Array<Book>){
        
        this.booksSource.next(book);
    }
}
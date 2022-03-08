import { Component } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Array<Book> = [
    { id: '1', title: 'title 1', author: 'author 1', type: 'gatunek 1', releaseDate: new Date() },
    { id: '2', title: 'title 2', author: 'author 2', type: 'gatunek 2', releaseDate: new Date() },
    { id: '3', title: 'title 3', author: 'author 3', type: 'gatunek 3', releaseDate: new Date() },
    { id: '4', title: 'title 4', author: 'author 4', type: 'gatunek 4', releaseDate: new Date() },
    { id: "5", title: 'title 5', author: 'author 5', type: 'gatunek 5', releaseDate: new Date() }
  ];

  deleteBook(book: Book) {
    this.books = this.books.filter((item) => item !== book);
  }

  onSubmit(data: Book) {
    this.books.push(data);
  }
}
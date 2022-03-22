import { BaseBookModel } from "../../feat-books/model/book.model";

export interface BooksStoreModel {
  [key: string]: BaseBookModel;
}
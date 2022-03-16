import { BaseBookDataModel } from 'src/app/shared/base-book-data.model';

//model klasy ksiązki
export interface Book extends Pick<BaseBookDataModel, 'id' | 'title' | 'author' | 'type' | 'releaseDate'> {}

export interface BooksStore {
    [key: string]: Book;
}
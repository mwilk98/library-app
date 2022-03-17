import { BaseDataModel } from 'src/app/shared/base-data.model';

//model klasy ksiązki
export interface Book extends Pick<BaseDataModel, 'id' | 'title' | 'author' | 'type' | 'releaseDate'> {}

export interface BooksStore {
    [key: string]: Book;
}
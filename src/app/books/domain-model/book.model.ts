// model klasy książki
export interface Book {
  id: string;
  title: string;
  author: string;
  type: string;
  releaseDate: Date;
}

export interface BooksStore {
    [key: string]: Book;
}
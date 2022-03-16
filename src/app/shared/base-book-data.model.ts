//bazowy model klasy książki
export interface BaseBookDataModel {
  id: string;
  title: string;
  author: string;
  type: string;
  releaseDate: Date;
}

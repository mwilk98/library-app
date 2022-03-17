//bazowy model klasy książki
export interface BaseDataModel {
  id: string;
  title: string;
  author: string;
  type: string;
  releaseDate: Date;
  idBook: string;
  idStudent: string;
  lendingDate: Date;
  status: boolean;
  name: string;
  surname: string;
  age: number;
  class: string;
  idError: boolean;
  titleError: boolean;
  authorError: boolean;
  typeError: boolean;
  dateError: boolean;
  idBookError: boolean;
  idStudentError: boolean;
}

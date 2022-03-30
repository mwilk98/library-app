//bazowy model
export interface BaseDataModel {
  id: string;
  title: string;
  author: string;
  type: string;
  releaseDate: string;
  idBook: string;
  idStudent: string;
  lendingDate: string;
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
  nameError: boolean;
  surnameError: boolean;
  ageError: boolean;
  classError: boolean;
}

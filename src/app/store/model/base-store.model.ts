import { BaseLendingModel } from "src/app/feat-lending/model/lending.model";
import { BaseStudentModel } from "src/app/feat-students/model/student.model";
import { BaseBookModel } from "../../feat-books/model/book.model";

export interface BooksStoreModel {
  [key: string]: BaseBookModel;
}

export interface LendingStoreModel {
  [key: string]: BaseLendingModel;
}

export interface StudentStoreModel {
  [key: string]: BaseStudentModel;
}


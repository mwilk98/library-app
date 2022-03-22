import { Injectable } from "@angular/core";
import { BaseBookModel } from "src/app/feat-books/model/book.model";
import { Student } from "src/app/feat-students/model/student.model";
import { Lending } from "../../model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingRefactorService {
  
  refactorBookData(id: string, book : BaseBookModel, lendings: Array<Lending>) {
    lendings.forEach(lending => {
      if (lending.idBook === id){
        lending.idBook = `${book.title} ${book.author}`;
      }
    })
  }

  refactorBackBookData(book : BaseBookModel, lendings: Array<Lending>) {
    lendings.forEach(lending => {
      if (lending.idBook === `${book.title} ${book.author}`){
        lending.idBook = `${book.id}`;
      }
    })
  }

  refactorStudentData(id: string, student : Student, lendings: Array<Lending>) {
    lendings.forEach(lending => {
      if (lending.idStudent === id){
        lending.idStudent = `${student.name} ${student.surname}`;
      }
    })
  }

  refactorBackStudentData(student : Student, lendings: Array<Lending>) {
    lendings.forEach(lending => {
      if (lending.idStudent === `${student.name} ${student.surname}`){
        lending.idStudent = `${student.id}`;
      }
    })
  }
}
import { Component, Input } from '@angular/core';
import { BookStoreService } from '../../stores/books/book-store.service';
import { LendingService } from '../services/lending.service';
import { StudentStoreService } from '../../stores/students/student-store.service';
import { Lending } from '../domain-model/lending.model';
import { LendingStoreService } from '../../stores/lendings/lending-store.service';

@Component({
  selector: 'app-books',
  templateUrl: '../ui/lending.component.html',
})
export class LendingComponent{
  constructor(
    readonly lendingSrv: LendingService,
    readonly lendingStoreSrv: LendingStoreService,
    readonly bookStoreSrv: BookStoreService,
    readonly studentStoreSrv: StudentStoreService
  ) {}

  formAddVisible = false;
  formEditVisible = false;
  buttonFormText = 'Dodaj'
  lendingEdited!: Lending;

  // onInit() {
  //   this.myStudents = this.lendingSrv.getStudent();
  // }

  deleteLending(lendingId: string) {
    this.lendingStoreSrv.deleteLending(lendingId);
  }

  onSubmit(data: Lending) {
    this.onShowForm();
    this.lendingStoreSrv.addLending(data)
  }

  onShowForm() {
    this.formAddVisible = !this.formAddVisible;
    this.buttonFormText = this.formAddVisible ? 'Wróć' : 'Dodaj';
  }

  onEdit(lending: Lending, data: Lending): void {
    this.formEditVisible = !this.formEditVisible;
    this.lendingStoreSrv.updateLending(lending.id, data);
  }
  
  onShowEdit(lending: Lending): void {
    this.lendingEdited = lending;
    this.formEditVisible = !this.formEditVisible;
  }
}

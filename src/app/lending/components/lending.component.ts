import { Component } from '@angular/core';
import { BookStoreService } from '../../books/store/book-store.service';
import { LendingService } from '../services/lending.service';
import { StudentStoreService } from '../../students/store/student-store.service';
import { Lending } from '../domain-model/lending.model';
import { LendingStoreService } from '../store/lending-store.service';

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
  EditRowID: string = '';
  buttonFormText = 'Dodaj';
  lendingEdited!: Lending;

  deleteLending(lendingId: string) {
    this.lendingStoreSrv.deleteLending(lendingId);
  }

  onSubmit(data: Lending) {
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

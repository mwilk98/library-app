import { Component } from '@angular/core';
import { BookStoreService } from '../books/store/book-store.service';
import { StudentStoreService } from '../students/store/student-store.service';
import { Lending } from './domain-model/lending.model';
import { LendingStoreService } from './store/lending-store.service';

@Component({
  selector: 'app-books',
  templateUrl: './lending.component.html',
})
export class LendingComponent{
  constructor(
    readonly lendingStoreSrv: LendingStoreService,
    readonly studentStoreSrv: StudentStoreService,
    readonly bookStoreSrv: BookStoreService
  ) {}

  formVisible = false;
  EditRowID: string = '';
  buttonFormText = 'Dodaj';

  deleteLending(lendingId: string) {
    this.lendingStoreSrv.deleteLending(lendingId);
  }

  onSubmit(data: Lending) {
    this.lendingStoreSrv.addLending(data)
  }

  onShowForm() {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  }

  Edit(val: string) {
    this.EditRowID = val;
  }

  onCancelEdit() {
    this.EditRowID = '';
  }

}

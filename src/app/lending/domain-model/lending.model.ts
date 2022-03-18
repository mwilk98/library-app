import { BaseDataModel } from 'src/app/base-model/base-data.model';

//model klasy wypożyczenia
export interface Lending extends Pick<BaseDataModel, 'id' | 'idBook' | 'idStudent' | 'lendingDate' | 'status'> {}

export interface LendingStore {
  [key: string]: Lending;
}

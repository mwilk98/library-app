import { BaseLendingDataModel } from 'src/app/shared/base-lending-data.model';

//model klasy wypożyczenia
export interface Lending extends Pick<BaseLendingDataModel, 'id' | 'idBook' | 'idStudent' | 'lendingDate' | 'status'> {}

export interface LendingStore {
  [key: string]: Lending;
}

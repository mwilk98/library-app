//bazowy model klasy wypożyczenia
export interface BaseLendingDataModel {
  id: string;
  idBook: string;
  idStudent: string;
  lendingDate: Date;
  status: boolean;
}
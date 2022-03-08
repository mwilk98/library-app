// model klasy wypożyczenia
export interface Lending {
    id: string;
    idBook: string;
    idStudent: string;
    lendingDate: Date;
    status: boolean;
  }
  
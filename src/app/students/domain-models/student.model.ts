//model klasy ucznia
export interface Student {
  id: string;
  name: string;
  surname: string;
  age: number;
  class: string;
}

export interface StudentStore {
  [key: string]: Student;
}

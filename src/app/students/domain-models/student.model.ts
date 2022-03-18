import { BaseDataModel } from 'src/app/base-model/base-data.model';

//model klasy ucznia
export interface Student extends Pick<BaseDataModel, 'id' | 'name' | 'surname' | 'age' | 'class'> {}

export interface StudentStore {
  [key: string]: Student;
}

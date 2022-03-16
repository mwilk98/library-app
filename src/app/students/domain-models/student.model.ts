import { BaseStudentDataModel } from '../../shared/base-student-data.model';

//model klasy ucznia
export interface Student extends Pick<BaseStudentDataModel, 'id' | 'name' | 'surname' | 'age' | 'class'> {}

export interface StudentStore {
  [key: string]: Student;
}

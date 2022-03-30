import { BaseDataModel } from "src/app/model/base-data.model";


//model klasy ucznia
export interface BaseStudentModel extends Pick<BaseDataModel, 'id' | 'name' | 'surname' | 'age' | 'class'> {}


import { BaseDataModel } from "src/app/model/base-data.model";


//model klasy wypożyczenia
export interface LendingErrorModel extends Pick<BaseDataModel, 'idError' | 'idBookError' | 'idStudentError' | 'dateError'> {}


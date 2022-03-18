import { BaseDataModel } from "src/app/model/base-data.model";


//model klasy wypożyczenia
export interface LendingError extends Pick<BaseDataModel, 'idError' | 'idBookError' | 'idStudentError' | 'dateError'> {}


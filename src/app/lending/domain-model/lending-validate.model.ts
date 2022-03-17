import { BaseDataModel } from 'src/app/shared/base-data.model';

//model klasy wypożyczenia
export interface LendingError extends Pick<BaseDataModel, 'idError' | 'idBookError' | 'idStudentError' | 'dateError'> {}


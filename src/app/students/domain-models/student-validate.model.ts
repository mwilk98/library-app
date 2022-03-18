import { BaseDataModel } from 'src/app/shared/base-data.model';

//model erroru studenta
export interface StudentError extends Pick<BaseDataModel, 'idError' | 'nameError' | 'surnameError' | 'ageError' | 'classError'> {}

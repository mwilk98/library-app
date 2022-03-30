import { BaseDataModel } from "src/app/model/base-data.model";


//model erroru studenta
export interface StudentErrorModel extends Pick<BaseDataModel, 'idError' | 'nameError' | 'surnameError' | 'ageError' | 'classError'> {}

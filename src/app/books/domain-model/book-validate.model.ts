import { BaseDataModel } from 'src/app/base-model/base-data.model';

//model klasy ksiązki
export interface BookError extends Pick<BaseDataModel, 'idError' | 'titleError' | 'authorError' | 'typeError' | 'dateError'> {}

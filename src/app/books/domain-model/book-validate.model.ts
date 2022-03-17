import { BaseDataModel } from 'src/app/shared/base-data.model';

//model klasy ksiązki
export interface BookError extends Pick<BaseDataModel, 'idError' | 'titleError' | 'authorError' | 'typeError' | 'dateError'> {}

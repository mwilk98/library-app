import { BaseDataModel } from "src/app/model/base-data.model";


//model erroru klasy ksiązki
export interface BookError extends Pick<BaseDataModel, 'idError' | 'titleError' | 'authorError' | 'typeError' | 'dateError'> {}

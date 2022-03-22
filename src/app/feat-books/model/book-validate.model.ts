import { BaseDataModel } from "src/app/model/base-data.model";

// model erroru klasy ksiązki
export interface BookErrorModel extends Pick<BaseDataModel, 'idError' | 'titleError' | 'authorError' | 'typeError' | 'dateError'> {}

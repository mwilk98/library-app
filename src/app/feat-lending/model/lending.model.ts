import { BaseDataModel } from "src/app/model/base-data.model";


//model klasy wypożyczenia
export interface BaseLendingModel extends Pick<BaseDataModel, 'id' | 'idBook' | 'idStudent' | 'lendingDate' | 'status'> {}


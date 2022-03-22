import { BaseDataModel } from "src/app/model/base-data.model";

//model klasy ksiązki
export interface BaseBookModel extends Pick<BaseDataModel, 'id' | 'title' | 'author' | 'type' | 'releaseDate'> {}

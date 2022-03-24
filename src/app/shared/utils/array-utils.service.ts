import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArrayUtilsService {
  /* bierze wartości obiektu i zwraca tablice */
  convertObjectToArray<TObject, TArray>(object: TObject): Array<TArray> {
    return Object.values(object);
  }

  /* bierze wartości tablicy obiektów i zwraca tablice tablic ze stringami */
  convertTableObjectToTableString<TTable>(table: Array<TTable>): Array<Array<string>> {
    return table.map(obj => Object.values(obj));
  }
}

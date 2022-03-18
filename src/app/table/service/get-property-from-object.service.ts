import { Injectable } from "@angular/core";

/* zamienia tablicę obiektów na tablicę wartości w celu wyświetlenia na liście */
@Injectable({ providedIn: 'root' })
export class GetPropertyFromObjectService {
  getProperty<TObject>(object: TObject): Array<string> {
    return Object.values(object);
  }

  getPropertyArray<TObject>(object: Array<TObject>): Array<Array<string>> {
    return object.map(obj => this.getProperty<TObject>(obj));
  }
}
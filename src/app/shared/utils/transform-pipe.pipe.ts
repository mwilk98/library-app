import { Pipe, PipeTransform } from '@angular/core';
import { BaseStudentModel } from 'src/app/feat-students/model/student.model';

@Pipe({
  name: 'transformPipe'
})
export class TransformPipePipe implements PipeTransform {

  transform(array: Array<BaseStudentModel>): Array<Array<string>> {
    return array.map(students => Object.values(students))
  }

}

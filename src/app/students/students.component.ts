import { Component } from '@angular/core';
import { LendingService } from '../lending/lending.service';
import { StudentStoreService } from './student-store.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  constructor(
    private shared: LendingService,
    private studentStoreService: StudentStoreService
  ) {}

  formVisible = false;
  ShowEditTable = false;
  EditRowID: string = '';
  buttonFormText = 'Dodaj';

  public students: Array<Student> = [];

  deleteStudent(student: Student) {
    this.students = this.students.filter((item) => item !== student);
    this.studentStoreService.changeStudents(this.students);
  }

  onSubmit(data: Student) {
    this.students.push(data);
    alert('Dodano ucznia');
  }

  onShowForm() {
    this.formVisible = !this.formVisible;
    this.buttonFormText = this.formVisible ? 'Wróć' : 'Dodaj';
  }

  Edit(val: string) {
    this.EditRowID = val;
  }

  onCancelEdit() {
    this.EditRowID = '';
  }

  ngOnInit(): void {
    this.studentStoreService.currentStudents.subscribe(
      (student) => (this.students = student)
    );
    this.shared.sharedLending = this.shared.getLending();
  }
}

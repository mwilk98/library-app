import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
})
export class UiTableComponent {
  @Input() header: Array<string> = [];
  @Input() data: Array<Array<string>> = [];
  @Input() showStatus: boolean = false;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<string>();
  @Output() editStatusEvent = new EventEmitter<string>();

  delete(id: string) {
    this.deleteEvent.emit(id);
  }

  edit(id: string) {
    this.editEvent.emit(id);
  }

  editStatus(id: string) {
    this.editStatusEvent.emit(id);
  }
}

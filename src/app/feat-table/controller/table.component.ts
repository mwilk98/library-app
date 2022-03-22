import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { GetPropertyFromObjectService } from "../service/get-property-from-object.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnChanges {
  constructor(private readonly getSrv: GetPropertyFromObjectService) {}
  @Input() header: Array<string> = [];
  @Input() data: Array<any> = [];
  @Input() showStatus: boolean = false;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<string>();
  @Output() editStatusEvent = new EventEmitter<string>();
  dataString:  Array<Array<string>> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.dataString = this.getSrv.getPropertyArray(this.data);
  }

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
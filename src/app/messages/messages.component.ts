import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent{

  @Input() displayFail: boolean = false;
  @Input() errorMessage : string = '';
  @Output() newItemEvent = new EventEmitter<boolean>();

  closeAlert(alert: boolean) {
    this.newItemEvent.emit(alert);
  }

}

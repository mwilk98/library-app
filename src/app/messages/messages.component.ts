import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  @Input() displayFail: boolean = false;
  @Input() errorMessage : string = '';
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  closeAlert(alert: boolean) {
    this.newItemEvent.emit(alert);
  }

}

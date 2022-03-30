import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-front-page',
  templateUrl: './ui-front-page.component.html',
})
export class UiFrontPageComponent {
  @Input() bookCounter: number = 0;
  @Input() studentCounter: number = 0;
  @Input() lendingCounter: number = 0;
  @Input() data: any;
  @Input() chartOptions: any;
}

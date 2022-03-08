import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LendingService {
  message: string = '';
  setMessage(data:string) {
    this.message = data;
    console.log(this.message)
  }
  getMessage() {
    console.log(this.message)
    return this.message;
    
  }
}

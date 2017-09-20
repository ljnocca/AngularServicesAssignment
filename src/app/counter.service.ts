import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter ++;
    console.log('Active to Inactive count is: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter ++;
    console.log('Inactive to Active count is: ' + this.inactiveToActiveCounter);
  }

}

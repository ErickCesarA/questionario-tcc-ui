import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeDorLockFunction = new EventEmitter();
  invokeMaiorDorLockFunction = new EventEmitter();
  invokeDorIrradiaLockFunction = new EventEmitter();
  subsVar!: Subscription;

  constructor() { }

  onDorLockButtonClick() {
    this.invokeDorLockFunction.emit();
  }
  onMaiorDorLockButtonClick() {
    this.invokeMaiorDorLockFunction.emit();
  }
  onDorIrradiaLockButtonClick() {
    this.invokeDorIrradiaLockFunction.emit();
  }

}

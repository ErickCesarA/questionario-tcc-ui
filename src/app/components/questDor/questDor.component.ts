import { Component, Input, OnInit } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-dor',
  templateUrl: './questDor.component.html',
  styleUrls: ['./questDor.component.css']
})
export class QuestDorComponent implements OnInit {

  quest!: Questionario;

  xDor!: number;
  yDor!: number;
  xDorLocked!: number;
  yDorLocked!: number;
  showTheDor!: boolean;


  xMaiorDor!: number;
  yMaiorDor!: number;
  xMaiorDorLocked!: number;
  yMaiorDorLocked!: number;
  showTheMaiorDor!: boolean;

  constructor() { }

  ngOnInit(): void {

    this.quest = new Questionario();
    this.showTheDor = true
    this.showTheMaiorDor = true;
   
  }

  getDorCoordinate(elem: { offsetX: number; offsetY: number; }) {
    this.xDor = elem.offsetX;
    this.yDor = elem.offsetY;
  }
  lockTheDorCordinates() {
    this.xDorLocked = this.xDor;
    this.yDorLocked = this.yDor;
    this.showTheDor = false;

  }
  onDorResize() {
    this.showTheDor = true;
  }
  setDorView() {

    let dorView = {
      'left': this.xDorLocked  + 'px',
      'top': this.yDorLocked + 'px'
    };
    return dorView;
  }

  getMaiorDorCoordinate(elem: { offsetX: number; offsetY: number; }) {
    this.xMaiorDor = elem.offsetX;
    this.yMaiorDor = elem.offsetY;
  }
  lockTheMaiorDorCordinates() {
    this.xMaiorDorLocked = this.xMaiorDor;
    this.yMaiorDorLocked = this.yMaiorDor;
    this.showTheMaiorDor = false;
  }
  onMaiorDorResize() {
    this.showTheMaiorDor = true;
  }
  setMaiorDorView() {

    let maiorDorView = {
      'left': this.xMaiorDorLocked + 'px',
      'top': this.yMaiorDorLocked + 'px'
    };
    return maiorDorView;

  }
  
}


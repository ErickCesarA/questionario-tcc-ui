import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Questionario } from '../../models/questionario';
import { QuestDor } from '../../models/questionarioDor';

@Component({
  selector: 'app-quest-dor',
  templateUrl: './quest-dor.component.html',
  styleUrls: ['./quest-dor.component.css']
})
export class QuestDorComponent implements OnInit {

  @Input() addQuestionario!: FormGroup;

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
    this.addQuestionario.controls['LocalDorX'].setValue(this.xDorLocked);
    this.addQuestionario.controls['LocalDorY'].setValue(this.yDorLocked);
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
    this.addQuestionario.controls['LocalMaiorDorX'].setValue(this.xMaiorDorLocked);
    this.addQuestionario.controls['LocalMaiorDorY'].setValue(this.yMaiorDorLocked);
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


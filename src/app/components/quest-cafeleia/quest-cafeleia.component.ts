import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { EnumLocalExatoDor, MappingLocalExatoDor } from 'src/app/enums/localExatoDor';

@Component({
  selector: 'app-quest-cafeleia',
  templateUrl: './quest-cafeleia.component.html',
  styleUrls: ['./quest-cafeleia.component.css']
})
export class QuestCafeleiaComponent implements OnInit {

  @Input() addQuestionario!: FormGroup;
 
  xDorIrradia!: number;
  yDorIrradia!: number;
  xDorIrradiaLocked!: number;
  yDorIrradiaLocked!: number;
  showTheDorIrradia!: boolean;
  

  public MappingLocalExatoDor = MappingLocalExatoDor;
  public itensLocalExatoDor = Object.values(EnumLocalExatoDor).filter(value => typeof value === 'string');
  
  constructor() { }

  ngOnInit(): void {

    this.showTheDorIrradia = true;

  }

  getDorIrradiaCoordinate(elem: { offsetX: number; offsetY: number; }) {
    this.xDorIrradia = elem.offsetX;
    this.yDorIrradia = elem.offsetY;
  }

  lockTheDorIrradiaCordinates() {
    this.xDorIrradiaLocked = this.xDorIrradia;
    this.yDorIrradiaLocked = this.yDorIrradia;
    this.addQuestionario.controls['LocacalIrradiaDorX'].setValue(this.xDorIrradiaLocked);
    this.addQuestionario.controls['LocacalIrradiaDorY'].setValue(this.yDorIrradiaLocked);
    this.showTheDorIrradia = false;
  }
  onDorIrradiaResize() {
    this.showTheDorIrradia = true;
  }
  setDorIrradiaView() {

    let dorIrradiaView = {
      'left': this.xDorIrradiaLocked + 'px',
      'top': this.yDorIrradiaLocked + 'px'
    };
    return dorIrradiaView;
  }
}

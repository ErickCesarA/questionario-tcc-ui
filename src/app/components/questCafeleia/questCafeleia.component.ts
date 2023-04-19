import { Component, Input, OnInit } from '@angular/core';
import { EnumLocalExatoDor, MappingLocalExatoDor } from 'src/app/enums/localExatoDor';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-cafeleia',
  templateUrl: './questCafeleia.component.html',
  styleUrls: ['./questCafeleia.component.css']
})
export class QuestCafeleiaComponent implements OnInit {

  quest!: Questionario;
  

  xDorIrradia!: number;
  yDorIrradia!: number;
  xDorIrradiaLocked!: number;
  yDorIrradiaLocked!: number;
  showTheDorIrradia!: boolean;

  public MappingLocalExatoDor = MappingLocalExatoDor;
  public itensLocalExatoDor = Object.values(EnumLocalExatoDor).filter(value => typeof value === 'string');

  public questsLocalExatoDor = [{ alt: "A", imag: "/../assets/imagens/A.jpg" }, { alt: "B", imag: "/../assets/imagens/B.jpg" }
    , { alt: "C", imag: "/../assets/imagens/C.jpg" }, { alt: "D", imag: "/../assets/imagens/D.jpg" }
    , { alt: "E", imag: "/../assets/imagens/E.jpg" }, { alt: "F", imag: "/../assets/imagens/F.jpg" }]

  constructor() { }

  ngOnInit(): void {

    this.quest = new Questionario();
    this.showTheDorIrradia = true;

  }

  getDorIrradiaCoordinate(elem: { offsetX: number; offsetY: number; }) {
    this.xDorIrradia = elem.offsetX;
    this.yDorIrradia = elem.offsetY;
  }

  lockTheDorIrradiaCordinates() {
    this.xDorIrradiaLocked = this.xDorIrradia;
    this.yDorIrradiaLocked = this.yDorIrradia;
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

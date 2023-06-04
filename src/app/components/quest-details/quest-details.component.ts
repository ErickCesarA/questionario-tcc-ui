import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';
import { EventEmitterService } from '../../services/event-emitter.service';
import { QuestServiceService } from '../../services/quest-service.service';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent {

  @Input() quest!: Questionario;
  questionarios: Questionario[] = [];

  xDorLocked!: number;
  yDorLocked!: number;
  DorImgLarg!: number;
  DorImgAlt!: number;
  showTheDor!: boolean;

  xMaiorDorLocked!: number;
  yMaiorDorLocked!: number;
  MaiorDorImgLarg!: number;
  MaiorDorImgAlt!: number;
  showTheMaiorDor!: boolean;

  xDorIrradiaLocked!: number;
  yDorIrradiaLocked!: number;
  DorIrradiaImgLarg!: number;
  DorIrradiaImgAlt!: number;
  showTheDorIrradia!: boolean

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {

    this.quest = new Questionario;
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeDorLockFunction.subscribe(() => {
          this.lockTheDorCordinates();
          this.lockTheMaiorDorCordinates();
          this.lockTheDorIrradiaCordinates();
        })
    };

  }

  lockTheDorCordinates() {

    var dorImg = document.querySelector("#dorImg");
    this.DorImgLarg = dorImg!.clientWidth;
    this.DorImgAlt = dorImg!.clientHeight;

    this.xDorLocked = (this.quest.localDorX / this.quest.telaLocalDorX) * this.DorImgLarg;
    this.yDorLocked = (this.quest.localDorY / this.quest.telaLocalDorY) * this.DorImgAlt;
 
  }
 
  setDorView() {

    let dorView = {
      'left': this.xDorLocked + 'px',
      'top': this.yDorLocked + 'px'
    };
    return dorView;
  }

  lockTheMaiorDorCordinates() {

    var maiorDorImg = document.querySelector("#maiorDorImg")
    this.MaiorDorImgLarg = maiorDorImg!.clientWidth
    this.MaiorDorImgAlt = maiorDorImg!.clientHeight
    
    this.xMaiorDorLocked = (this.quest.localMaiorDorX / this.quest.telaLocalMaiorDorX) * this.MaiorDorImgLarg;
    this.yMaiorDorLocked = (this.quest.localMaiorDorY / this.quest.telaLocalMaiorDorY) * this.MaiorDorImgAlt;
    this.showTheMaiorDor = false;
    
  }
 
  setMaiorDorView() {

    let maiorDorView = {
      'left': this.xMaiorDorLocked + 'px',
      'top': this.yMaiorDorLocked + 'px'
    };
    return maiorDorView;

  }


  lockTheDorIrradiaCordinates() {

    var maiorDorImg = document.querySelector("#dorIrradiaImg")
    this.DorIrradiaImgLarg = maiorDorImg!.clientWidth
    this.DorIrradiaImgAlt = maiorDorImg!.clientHeight

    this.xDorIrradiaLocked = (this.quest.localIrradiaDorX / this.quest.telaLocalIrradiaDorX) * this.DorIrradiaImgLarg;
    this.yDorIrradiaLocked = (this.quest.localIrradiaDorY / this.quest.telaLocalIrradiaDorY) * this.DorIrradiaImgAlt;
    this.showTheDorIrradia = false;
   
  }
  setDorIrradiaView() {

    let dorIrradiaView = {
      'left': this.xDorIrradiaLocked + 'px',
      'top': this.yDorIrradiaLocked + 'px'
    };
    return dorIrradiaView;
  }
}

import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent {

  @Input() quest!: Questionario;
  questionario!: Questionario;

  xDorLocked!: number;
  yDorLocked!: number;
  showTheDor!: boolean;

  xMaiorDorLocked!: number;
  yMaiorDorLocked!: number;
  showTheMaiorDor!: boolean;

  showTheDorIrradia!: boolean
  xDorIrradiaLocked!: number;
  yDorIrradiaLocked!: number;
  

  ngOnInit(): void {

    this.lockTheDorIrradiaCordinates();
    this.lockTheDorCordinates();
    this.lockTheMaiorDorCordinates();
  

  }
  lockTheDorCordinates() {
    this.xDorLocked = (this.quest.localDorX / this.quest.telaLocalDorX) * window.innerWidth;
    this.yDorLocked = (this.quest.localDorY / this.quest.telaLocalDorY) * window.innerHeight;
    this.showTheDor = false;
    console.log(this.xDorLocked)
    console.log(this.yDorLocked)
    console.log(this.yDorLocked)

  }
 
  setDorView() {

    let dorView = {
      'left': this.xDorLocked + 'px',
      'top': this.yDorLocked + 'px'
    };
    return dorView;
  }

  lockTheMaiorDorCordinates() {
    this.xMaiorDorLocked = (this.quest.localMaiorDorX / this.quest.telaLocalMaiorDorX) * window.innerWidth;
    this.yMaiorDorLocked = (this.quest.localMaiorDorY / this.quest.telaLocalMaiorDorY) * window.innerHeight;
    this.showTheMaiorDor = false;
    console.log(this.xMaiorDorLocked)
    console.log(this.yMaiorDorLocked)
  }
 
  setMaiorDorView() {

    let maiorDorView = {
      'left': this.xMaiorDorLocked + 'px',
      'top': this.yMaiorDorLocked + 'px'
    };
    return maiorDorView;

  }


  lockTheDorIrradiaCordinates() {
    this.xDorIrradiaLocked = (this.quest.localIrradiaDorX / this.quest.telaLocalIrradiaDorX) * window.innerWidth;
    this.yDorIrradiaLocked = (this.quest.localIrradiaDorY / this.quest.telaLocalIrradiaDorY) * window.innerHeight;
    this.showTheDorIrradia = false;
    console.log(this.xDorIrradiaLocked)
    console.log(this.yDorIrradiaLocked)
  }
  setDorIrradiaView() {

    let dorIrradiaView = {
      'left': this.xDorIrradiaLocked + 'px',
      'top': this.yDorIrradiaLocked + 'px'
    };
    return dorIrradiaView;
  }
}

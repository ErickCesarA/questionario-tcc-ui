import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EnumGenero, MappingGenero } from '../../enums/genero';
import { Questionario } from '../../models/questionario';
import { EventEmitterService } from '../../services/event-emitter.service';
import { QuestServiceService } from '../../services/quest-service.service';
import { QuestDetailsComponent } from '../quest-details/quest-details.component';

@Component({
  selector: 'app-quest-resposta',
  templateUrl: './quest-resposta.component.html',
  styleUrls: ['./quest-resposta.component.css']
})
export class QuestRespostaComponent implements OnInit {

  questionarios: Questionario[] = [];
  questsDetalhes!: Questionario;


  constructor(private questService: QuestServiceService, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {

    this.getQuests()
  }

  private getQuests() {
    this.questService.getQuestionarios()
      .subscribe((result: Questionario[]) => (this.questionarios = result));
  }

  showDetalhes(quest: Questionario) {
    this.questsDetalhes = quest;
    this.eventEmitterService.onDorLockButtonClick();
    this.eventEmitterService.onMaiorDorLockButtonClick();
    this.eventEmitterService.onDorIrradiaLockButtonClick();
  }
 
}


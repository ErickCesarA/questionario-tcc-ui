import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EnumGenero, MappingGenero } from '../../enums/genero';
import { Questionario } from '../../models/questionario';
import { QuestServiceService } from '../../services/quest-service.service';

@Component({
  selector: 'app-quest-resposta',
  templateUrl: './quest-resposta.component.html',
  styleUrls: ['./quest-resposta.component.css']
})
export class QuestRespostaComponent implements OnInit {

  questionarios: Questionario[] = [];
  questsDetalhes!: Questionario;


  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {

    this.getQuests()
  }

  private getQuests() {
    this.questService.getQuestionarios()
      .subscribe((result: Questionario[]) => (this.questionarios = result));
  }

  showDetalhes(quest:Questionario) {
    this.questsDetalhes = quest;
  }

}

import { Component, OnInit } from '@angular/core';
import { Questionario } from '../../models/questionario';
import { QuestServiceService } from '../../services/quest-service.service';

@Component({
  selector: 'app-quest-resposta',
  templateUrl: './quest-resposta.component.html',
  styleUrls: ['./quest-resposta.component.css']
})
export class QuestRespostaComponent implements OnInit {

  questionarios: Questionario[] = [];
  questToShow!: Questionario;

  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {

    this.getQuestionarios();
    
  }

  private getQuestionarios() {
    this.questService
      .getQuestionarios()
      .subscribe((result: Questionario[]) => (this.questionarios = result));
    this.questService
  }

  mostrarQuestionario(questionario: Questionario) {
    this.questToShow = questionario;

  }
}

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

  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {
    this.questService.getQuestionarios().subscribe((result: Questionario[]) => this.questionarios = result);
  }
  updateQuestList(questionarios: Questionario[]) {
    this.questionarios = questionarios
  }
}

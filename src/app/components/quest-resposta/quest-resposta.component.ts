import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Questionario } from '../../models/questionario';
import { QuestServiceService } from '../../services/quest-service.service';

@Component({
  selector: 'app-quest-resposta',
  templateUrl: './quest-resposta.component.html',
  styleUrls: ['./quest-resposta.component.css']
})
export class QuestRespostaComponent implements OnInit {

  questionarios: Questionario[] = [];
  questToShow!: Questionario
  @Input() addQuestioanrios!: FormGroup;

  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {

    this.getQuestionarios();

  }

  private getQuestionarios(): void {
    this.questService.getQuestionarios()
      .subscribe(quests => {
        console.log(quests);
      });
  }
}

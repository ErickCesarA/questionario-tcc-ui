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

  questionarios: Questionario[]=[];
  addQuestionarios!: FormGroup;

  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {

    this.questService.refreshLists.subscribe(() => { this.getQuestionarios(); });
    this.getQuestionarios()

  }

  private getQuestionarios(): void {
    this.questService.getQuestionarios()
      .subscribe((result: Questionario[]) => (this.questionarios = result));
  }
  
}

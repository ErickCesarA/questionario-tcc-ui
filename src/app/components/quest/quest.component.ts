import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questionario } from '../../models/questionario';
import { QuestServiceService } from '../../services/quest-service.service';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css'],
})

export class QuestComponent implements OnInit {

  @Input() questionario!: Questionario;
  @Output() questionarioUpdate = new EventEmitter<Questionario[]>();

  constructor(private questService: QuestServiceService) { }

  ngOnInit(): void {



  }

  enviarQuestionario(questionario: Questionario) {

    this.questService
      .enviarQuestionario(questionario)
      .subscribe((questionarios: Questionario[]) => this.questionarioUpdate.emit(questionarios));
  }
}

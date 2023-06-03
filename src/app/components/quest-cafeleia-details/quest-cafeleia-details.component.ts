import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-cafeleia-details',
  templateUrl: './quest-cafeleia-details.component.html',
  styleUrls: ['./quest-cafeleia-details.component.css']
})
export class QuestCafeleiaDetailsComponent {

  @Input() quest!: Questionario;
}

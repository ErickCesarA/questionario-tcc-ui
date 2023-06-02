import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent {

  @Input() quest!: Questionario;

}

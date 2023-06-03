import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-dor-details',
  templateUrl: './quest-dor-details.component.html',
  styleUrls: ['./quest-dor-details.component.css']
})
export class QuestDorDetailsComponent {

  @Input() quest!: Questionario;

}



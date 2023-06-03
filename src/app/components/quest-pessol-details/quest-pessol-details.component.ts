import { Component, Input } from '@angular/core';
import { Questionario } from '../../models/questionario';

@Component({
  selector: 'app-quest-pessol-details',
  templateUrl: './quest-pessol-details.component.html',
  styleUrls: ['./quest-pessol-details.component.css']
})
export class QuestPessolDetailsComponent {

  @Input() quest!: Questionario;
  
  constructor() { }

  ngOnInit(): void {

  }

}

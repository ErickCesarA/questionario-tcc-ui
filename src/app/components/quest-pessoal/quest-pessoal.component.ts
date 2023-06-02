import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Questionario } from 'src/app/models/questionario';
import { EnumHorasExercicios, MappingHorasExercicios } from 'src/app/enums/horasExercicios';
import { EnumGenero, MappingGenero } from 'src/app/enums/genero';
import { EnumEtinia, MappingEtinia } from 'src/app/enums/etinia';
import { EnumAnosCafeleia, MappingAnosCafeleia } from 'src/app/enums/anosCafeleia';
import { EnumStatusCivil, MappingStatusCivil } from 'src/app/enums/statusCivil';
import { QuestPessoal } from '../../models/questionarioPessoal';



@Component({
  selector: 'app-quest-pessoal',
  templateUrl: './quest-pessoal.component.html',
  styleUrls: ['./quest-pessoal.component.css'],
})

export class QuestPessoalComponent implements OnInit {

  @Input() addQuestionario!: FormGroup;
 
  public MappingHorasExercicios = MappingHorasExercicios;
  public itensHorasExercicios = Object.values(EnumHorasExercicios).filter(value => typeof value === 'string');

  public MappingGenero = MappingGenero;
  public itensGenero = Object.values(EnumGenero).filter(value => typeof value === 'string');

  public MappingEtinia = MappingEtinia;
  public itensEtinia = Object.values(EnumEtinia).filter(value => typeof value === 'string');

  public MappingAnosCafeleia = MappingAnosCafeleia;
  public itensAnosCafeleia = Object.values(EnumAnosCafeleia).filter(value => typeof value === 'string');

  public MappingStatusCivil = MappingStatusCivil;
  public itensStatusCivil = Object.values(EnumStatusCivil).filter(value => typeof value === 'string');

  

  constructor() { }

  ngOnInit(): void {

  }
  
  
}


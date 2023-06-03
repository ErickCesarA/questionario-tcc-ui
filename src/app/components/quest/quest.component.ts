import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestServiceService } from '../../services/quest-service.service';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Questionario } from '../../models/questionario';
import { concat, ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css'],
})

export class QuestComponent implements OnInit {

  addQuestionario!: UntypedFormGroup;
  questFormSucess: boolean = false;
  questioanrio!: Questionario;

  constructor(private questService: QuestServiceService, private formBuilder: UntypedFormBuilder ) { }

  ngOnInit(): void {

    this.initForm();

  }

  enviarQuest(){
    if (this.addQuestionario.valid) {
      this.questService.enviarQuestionario(this.addQuestionario.value)
        .subscribe(result =>
        {console.log(result);});
    this.questFormSucess = true;
    }
    else {
      alert('Preencha todos os campos obrigatorios');
    }
  }

  private initForm(): void {
    this.addQuestionario = this.formBuilder.group({
      LocalDorX: [null, [Validators.required]],
      LocalDorY: [null, [Validators.required]],
      TelaLocalDorX: [0],
      TelaLocalDorY: [0],
      LocalMaiorDorX: [null, [Validators.required]], 
      LocalMaiorDorY: [null, [Validators.required]],
      TelaLocalMaiorDorX: [0],
      TelaLocalMaiorDorY: [0],
      MaiorDor24h: [null,[Validators.required]],
      MenorDor24h: [null,[Validators.required]],
      GeralDor24h: [null,[Validators.required]],
      DorMomento: [null, [Validators.required]],
      TratamentoDor: ['', [Validators.required]],
      DorAtividadeGeral: [null, [Validators.required]],
      DorHumor: [null, [Validators.required]],
      DorLocomocao: [null,[Validators.required]],
      DorTrabalho: [null, [Validators.required]],
      DorRelacionamento: [null, [Validators.required]],
      DorSono: [null, [Validators.required]],
      DorVida: [null, [Validators.required]],
      Nome: [null, [Validators.required]],
      Telefone: [null, [Validators.required]],
      Idade: [null, [Validators.required]],
      Genero: [''],
      StatusCivil: [''],
      Etinia: [''],
      DoencaCronica: [false],
      QualDoenca: [''],
      HoraExercicio: [null, [Validators.required]],
      MedicamentoContinuo: [false],
      QualMedicamento: [''],
      MlCafeSemana: [0],
      Fuma: [false],
      QtdMacosSemana: [0],
      Bebida: [false],
      BedidasSemana: [0],
      AnosCafeleia: [null, [Validators.required]],
      EpisodiosMes: [null, [Validators.required]],
      BuscaProficional: [false],
      Melhora: [false],
      LocalExataDor: [null, [Validators.required]],
      DorIrradia: [false],
      LocalIrradiaDorX: [0],
      LocalIrradiaDorY: [0],
      TelaLocalIrradiaDorX: [0],
      TelaLocalIrradiaDorY: [0],
      DiscricaoDor: [null, [Validators.required]],
      ItensidadeDor: [0],
      TempoPicoDor: [null, [Validators.required]],
      TempoCrise: [null, [Validators.required]],
      FatorAgravante: [false],
      QualFatorAgravante: [''],
      FatorAtenuante: [false],
      QualFatorAtenuante: [''],
      SintomasAlem: [false],
      NauseaVomito: [false],
      SensiLuzSom: [false],
      PontBriManchEsc: [false],
      Criterio1: [false],
      Criterio2: [false],
      Criterio3: [false],
      Criterio4: [false],
      Criterio5: [false],
      Criterio6: [false],
      Criterio7: [false],
      Criterio8: [false],
      Criterio9: [false],
      Criterio10: [false],
      Criterio11: [false],
      Criterio12: [false],
      Criterio13: [false],
      Criterio14: [false],
      Criterio15: [false],
      Criterio16: [false],

    })
  }
}

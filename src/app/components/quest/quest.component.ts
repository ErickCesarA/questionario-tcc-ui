import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestServiceService } from '../../services/quest-service.service';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
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
        {
          console.log(result);
        });
      console.log(this.addQuestionario.value)
    this.questFormSucess = true;
    }
    else {
      alert('Form invalid');
    }
  }

  private initForm(): void {
    this.addQuestionario = this.formBuilder.group({
      LocalDorX: null,
      LocalDorY: null,
      LocalMaiorDorX: null,
      LocalMaiorDorY: null,
      MaiorDor24h: null,
      MenorDor24h: null,
      GeralDor24h: null,
      DorMomento: null,
      TratamentoDor: [''],
      DorAtividadeGeral: null,
      DorHumor: null,
      DorLocomocao: null,
      DorTrabalho: null,
      DorRelacionamento: null,
      DorSono: null,
      DorVida: null,
      Nome: [''],
      Telefone: [''],
      Idade: null,
      Genero: [''],
      StatusCivil: [''],
      Etinia: [''],
      DoencaCronica: false,
      QualDoenca: [''],
      HoraExercicio: [''],
      MedicamentoContinuo: false,
      QualMedicamento: [''],
      MlCafeSemana: null,
      Fuma: false,
      QtdMacosSemana: null,
      Bebida: false,
      BedidasSemana: null,
      AnosCafeleia: [''],
      EpisodiosMes: null,
      BuscaProficional: false,
      Melhora: false,
      LocalExataDor: [''],
      DorIrradia: false,
      LocacalIrradiaDorX: null,
      LocacalIrradiaDorY: null,
      DiscricaoDor: [''],
      ItensidadeDor: null,
      TempoPicoDor: [''],
      TempoCrise: [''],
      FatorAgravante: false,
      QualFatorAgravante: [''],
      FatorAtenuante: false,
      QualFatorAtenuante: [''],
      SintomasAlem: false,
      NauseaVomito: false,
      SensiLuzSom: false,
      PontBriManchEsc: false,
    })
  }

}

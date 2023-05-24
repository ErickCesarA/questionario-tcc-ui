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
      LocalMaiorDorX: [null, [Validators.required]], 
      LocalMaiorDorY: [null, [Validators.required]], 
      MaiorDor24h: [0],
      MenorDor24h: [0],
      GeralDor24h: [0],
      DorMomento: [0],
      TratamentoDor: [''],
      DorAtividadeGeral: [0],
      DorHumor: [0],
      DorLocomocao: [0],
      DorTrabalho: [0],
      DorRelacionamento: [0],
      DorSono: [0],
      DorVida: [0],
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
      MlCafeSemana: 0,
      Fuma: [false],
      QtdMacosSemana: 0,
      Bebida: [false],
      BedidasSemana: 0,
      AnosCafeleia: [null, [Validators.required]],
      EpisodiosMes: [0],
      BuscaProficional: [false],
      Melhora: [false],
      LocalExataDor: [null, [Validators.required]],
      DorIrradia: [false],
      LocacalIrradiaDorX: null,
      LocacalIrradiaDorY: null,
      DiscricaoDor: [null, [Validators.required]],
      ItensidadeDor: [0],
      TempoPicoDor: [null, [Validators.required]],
      TempoCrise: [null, [Validators.required]],
      FatorAgravante: [false],
      QualFatorAgravante: [''],
      FatorAtenuante: [false],
      QualFatorAtenuante: [''],
      SintomasAlem: [false],
      NauseaVomito: false,
      SensiLuzSom: false,
      PontBriManchEsc: false,
    })
  }

}

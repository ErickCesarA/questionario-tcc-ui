import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestServiceService } from '../../services/quest-service.service';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Questionario } from '../../models/questionario';



@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css'],
})

export class QuestComponent implements OnInit {

  @Input('Allquestionarios') questionarios!: Questionario[];
  public addQuestionario!: UntypedFormGroup;
  questFormSucess: boolean = false
 
  constructor(private questService: QuestServiceService, private formBuilder: UntypedFormBuilder ) { }

  ngOnInit(): void {

    this.initForm();

  }

  enviarQuestionario(): void {
    console.log(this.addQuestionario)
    this.questFormSucess = true
    //if (this.addQuestionario.valid) {
    //  this.questService.enviarQuestionario(this.addQuestionario.value)
    //    .subscribe(x => {
    //      console.log(x);
    //      this.questForm = false;
    //      this.questFormSucess = true
    //    });
    //}
    //else {
    //  alert('Form invalid');
    //}
  }
  cafeleiaQuestForm = this.formBuilder.group({
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
  });
  pessoalQuestForm = this.formBuilder.group({

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

  })

  dorQuestForm = this.formBuilder.group({
    LocalDorX: new FormControl(null),
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
  })
  private initForm(): void {
    this.addQuestionario = this.formBuilder.group({
      dorQuest: this.dorQuestForm,
      pessoalQuest: this.pessoalQuestForm,
      cafeleiaQuest: this.cafeleiaQuestForm,
 
    })
  }


}

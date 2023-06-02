import { QuestCafeleia } from "./questionarioCafeleia";
import { QuestDor } from "./questionarioDor";
import { QuestPessoal } from "./questionarioPessoal";

export class Questionario {

  localDorX!: number;
  localDorY!: number;
  localMaiorDorX!: number;
  localMaiorDorY!: number;
  maiorDor24h!: number;
  menorDor24h!: number;
  geralDor24h!: number;
  dorMomento!: number;
  tratamentoDor!: string;
  dorAtividadeGeral!: number;
  dorHumor!: number;
  dorLocomocao!: number;
  dorTrabalho!: number;
  dorRelacionamento!: number;
  dorSono!: number;
  dorVida!: number;
  id!: number;
  nome!: string;
  telefone!: string;
  idade!: number;
  genero!: string;
  statusCivil!: string;
  etinia!: string;
  doencaCronica!: boolean;
  qualDoenca!: string;
  horaExercicio!: string;
  medicamentoContinuo!: boolean;
  qualMedicamento!: string;
  mlCafeSemana!: number;
  fuma!: boolean;
  qtdMacosSemana!: number;
  bebida!: boolean;
  bedidasSemana!: number;
  anosCafeleia!: string;
  episodiosMes!: number;
  buscaProficional!: boolean;
  melhora!: boolean;
  localExataDor!: string;
  dorIrradia !: boolean;
  locacalIrradiaDorX !: number;
  locacalIrradiaDorY !: number;
  discricaoDor!: string;
  itensidadeDor !: number;
  tempoPicoDor !: string;
  tempoCrise!: string;
  fatorAgravante !: boolean;
  qualFatorAgravante!: string;
  fatorAtenuante !: boolean;
  qualFatorAtenuante!: string;
  sintomasAlem!: boolean;
  nauseaVomito !: boolean;
  sensiLuzSom !: boolean;
  pontBriManchEsc!: boolean;


}


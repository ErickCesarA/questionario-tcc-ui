import { Time } from "@angular/common";

export class Questionario {
        Id?: number;
        Idade?: number;
        Genero?: number;
        StatusCivil?: number;
        Etinia?: number;
        DoencaCronica?: boolean;
        QualDoenca? = "";
        HoraExercicio?: number; 
        MedicamentoContinuo?: boolean;
        QualMedicamento = ""
        MlCafeSemana?: number;
        Fuma?: boolean;
        QtdMacosSemana?: number; 
        Bebida?: boolean;
        BedidasSemana?: number;
        AnosCafeleia?: number;
        EpisodiosMes?: number;
        BuscaProficional?: boolean;
        Melhora?: boolean;
        LocalDorX?: number;
        LocalDorY?:number;
        LocalMaiorDorX?: number;
        LocalMaiorDorY?: number;
        MaiorDor24h?: number;
        MenorDor24h?: number;
        GeralDor24h?: number;
        DorMomento?: number;
        TratamentoDor = "";
        DorAtividadeGeral?: number;
        DorHumor?: number;
        DorLocomocao?: number;
        DorTrabalho?: number;
        DorRelacionamento?: number;
        DorSono?: number;
        DorVida?: number;
        LocalExataDor?: number;
        DorIrradia?: boolean;
        LocacalIrradiaDorX?:number;
        LocacalIrradiaDorY?:number;
        DiscricaoDor = "";
        ItensidadeDor ?: number;
        TempoPicoDor?: Time;
        TempoCrise?: Time;
        FatorAgravante?: boolean;
        QualFatorAgravante = "";
        FatorAtenuante ?: boolean 
        QualFatorAtenuante = ""; 
        SintomasAlem ?: boolean; 
        QualSintomasAlem = ""; 
}

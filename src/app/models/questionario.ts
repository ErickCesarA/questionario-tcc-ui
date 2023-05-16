import { Time } from "@angular/common";

export class Questionario {
        Id?: number;
        Nome = "";
        Telefone = "";
        Idade?: number;
        Genero = "";
        StatusCivil = "";
        Etinia = "";
        DoencaCronica?: boolean;
        QualDoenca? = "";
        HoraExercicio = ""; 
        MedicamentoContinuo?: boolean;
        QualMedicamento = ""
        MlCafeSemana?: number;
        Fuma?: boolean;
        QtdMacosSemana?: number; 
        Bebida?: boolean;
        BedidasSemana?: number;
        AnosCafeleia = "";
        EpisodiosMes?: number;
        BuscaProficional?: boolean;
        Melhora?: boolean;
        LocalDorX?: 1;
        LocalDorY?:1;
        LocalMaiorDorX?: 1;
        LocalMaiorDorY?: 1;
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
        LocalExataDor = "";
        DorIrradia?: boolean;
        LocacalIrradiaDorX?:1;
        LocacalIrradiaDorY?:1;
        DiscricaoDor = "";
        ItensidadeDor ?: number;
        TempoPicoDor = "";
        TempoCrise = "";
        FatorAgravante?: boolean;
        QualFatorAgravante = "";
        FatorAtenuante ?: boolean 
        QualFatorAtenuante = ""; 
        SintomasAlem ?: boolean; 
        NauseaVomito?: boolean;
        SensiLuzSom?: boolean;
        PontBriManchEsc?: boolean;
}

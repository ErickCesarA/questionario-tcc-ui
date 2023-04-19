export enum EnumEtinia {

  Pardo = "0",
  Branco = "1",
  Preto = "2",
  Indigena = "3",
  
}

export const MappingEtinia: Record<EnumEtinia, string> =
{
  [EnumEtinia.Pardo]: "Pardo",
  [EnumEtinia.Branco]: "Branco",
  [EnumEtinia.Preto]: "Preto",
  [EnumEtinia.Indigena]: "Indigena",
  

}

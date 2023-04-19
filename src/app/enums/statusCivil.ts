export enum EnumStatusCivil {

  Solteiro = "0" ,
  Casado = "1",
  Separado = "2",
  Divorciado = "3",
  Viuvo = "4",
}

export const MappingStatusCivil : Record<EnumStatusCivil, string> =
{
  [EnumStatusCivil.Solteiro]: "Solteiro",
  [EnumStatusCivil.Casado]: "Casado",
  [EnumStatusCivil.Separado]: "Separado",
  [EnumStatusCivil.Divorciado]: "Divorciado" ,
  [EnumStatusCivil.Viuvo]: "Viúvo",

}

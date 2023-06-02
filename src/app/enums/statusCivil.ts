export enum EnumStatusCivil {

  Solteiro = "Solteiro" ,
  Casado = "Casado",
  Separado = "Separado",
  Divorciado = "Divorciado",
  Viuvo = "Viúvo",
}

export const MappingStatusCivil : Record<EnumStatusCivil, string> =
{
  [EnumStatusCivil.Solteiro]: "Solteiro",
  [EnumStatusCivil.Casado]: "Casado",
  [EnumStatusCivil.Separado]: "Separado",
  [EnumStatusCivil.Divorciado]: "Divorciado" ,
  [EnumStatusCivil.Viuvo]: "Viúvo",

}

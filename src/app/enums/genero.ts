export enum EnumGenero {

  Masculino = "Masculino",
  Feminino = "Feminino",
  Trangenero = "Trangênero",
  Outro = "Outro",
  NDefinir = "Prefiro não informar",

}

export const MappingGenero: Record<EnumGenero, string> =
{
  [EnumGenero.Masculino]: "Masculino",
  [EnumGenero.Feminino]: "Feminino",
  [EnumGenero.Trangenero]: "Trangênero", 
  [EnumGenero.Outro]: "Outro",
  [EnumGenero.NDefinir]: "Prefiro não informar",
}

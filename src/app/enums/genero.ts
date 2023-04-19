export enum EnumGenero {

  Masculino = "0",
  Feminino = "1",
  Trangenero = "2",
  Outro = "3",
  NDefinir = "4",

}

export const MappingGenero: Record<EnumGenero, string> =
{
  [EnumGenero.Masculino]: "Masculino",
  [EnumGenero.Feminino]: "Feminino",
  [EnumGenero.Trangenero]: "Trangênero", 
  [EnumGenero.Outro]: "Outro",
  [EnumGenero.NDefinir]: "Prefiro não informar",
}

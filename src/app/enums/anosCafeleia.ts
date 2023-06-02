export enum EnumAnosCafeleia {
  
  menos1 = "menos de 1 mês",
  entre1_3 = "entre 1 e 3 mêses",
  entre3_6 = "entre 3 e 6 mêses",
  entre6_1 = "entre 6 mêse e 1 ano",
  mais1 = "mais de 1 ano",
}

export const MappingAnosCafeleia: Record<EnumAnosCafeleia, string> =
{
  [EnumAnosCafeleia.menos1]: "menos de 1 mês",
  [EnumAnosCafeleia.entre1_3]: "entre 1 e 3 mêses",
  [EnumAnosCafeleia.entre3_6]: "entre 3 e 6 mêses",
  [EnumAnosCafeleia.entre6_1]: "entre 6 mêse e 1 ano",
  [EnumAnosCafeleia.mais1]: "mais de 1 ano",
 
}

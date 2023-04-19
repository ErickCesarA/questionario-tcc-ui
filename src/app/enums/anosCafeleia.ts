export enum EnumAnosCafeleia {
  
  menos1 = "0",
  entre1_3 = "1",
  entre3_6 = "2",
  entre6_1 = "3",
  mais1 = "4",
}

export const MappingAnosCafeleia: Record<EnumAnosCafeleia, string> =
{
  [EnumAnosCafeleia.menos1]: "menos de 1 mês",
  [EnumAnosCafeleia.entre1_3]: "entre 1 e 3 mêses",
  [EnumAnosCafeleia.entre3_6]: "entre 3 e 6 mêses",
  [EnumAnosCafeleia.entre6_1]: "entre 6 mêse e 1 ano",
  [EnumAnosCafeleia.mais1]: "mais de 1 ano",
 
}

export enum EnumHorasExercicios {

  poucoExercicio = "0",
  medioExercicio = "1",
  muitoExercicio = "2",
 
}

export const MappingHorasExercicios: Record<EnumHorasExercicios, string> =
{
  [EnumHorasExercicios.poucoExercicio]: "menos de 1 hora",
  [EnumHorasExercicios.medioExercicio]: "entre 1 a 2 horas", 
  [EnumHorasExercicios.muitoExercicio]: "mais de 2 horas",
  
}

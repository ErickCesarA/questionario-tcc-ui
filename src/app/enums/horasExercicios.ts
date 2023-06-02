export enum EnumHorasExercicios {

  poucoExercicio = "menos de 1 hora",
  medioExercicio = "entre 1 a 2 horas",
  muitoExercicio = "mais de 2 horas",
 
}

export const MappingHorasExercicios: Record<EnumHorasExercicios, string> =
{
  [EnumHorasExercicios.poucoExercicio]: "menos de 1 hora",
  [EnumHorasExercicios.medioExercicio]: "entre 1 a 2 horas", 
  [EnumHorasExercicios.muitoExercicio]: "mais de 2 horas",
  
}

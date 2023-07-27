import { z } from '@/libs/forms'

export const technicalInfoStepSchema = z.object({
  timeLearning: z.enum(
    ['1 ano', '2 anos', '3 anos', 'Mais de 3 anos'],
    {
      required_error: 'Campo obrigatório',
    },
  ),
  linkRepoBestProject: z
    .string()
    .min(1, { message: 'Link inválido' }),
  aboutBestProject: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
})

export type TechnicalInfoStepType = z.infer<
  typeof technicalInfoStepSchema
>

import { z } from '@/libs/forms'

export const personalInfoStepSchema = z.object({
  fullName: z.string().min(3, { message: 'Nome inválido' }),
  age: z
    .number({
      invalid_type_error: 'Valor inválido',
    })
    .min(18, {
      message: 'É necessário ter no mínimo 18 anos para participar',
    }),
  email: z.string().email({ message: 'Email inválido' }),
  github: z.string().min(3, { message: 'Usuário inválido' }),
  linkedin: z.string().min(3, { message: 'Usuário inválido' }),
  developmentSide: z.enum(['frontend', 'backend'], {
    required_error: 'Campo obrigatório',
  }),
})

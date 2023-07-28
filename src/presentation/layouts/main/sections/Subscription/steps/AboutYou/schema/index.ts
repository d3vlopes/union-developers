import { z } from '@/libs/forms'

export const aboutYouStepSchema = z.object({
  youMotivation: z.string().min(1, { message: 'Campo obrigatório' }),
  timeManagement: z.string().min(1, { message: 'Campo obrigatório' }),
  aboutFeedback: z.string().min(1, { message: 'Campo obrigatório' }),
  howDidYouKnow: z.string().min(1, { message: 'Campo obrigatório' }),
  becauseParticipate: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
  reasonForSelected: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
  isTermsAccepted: z.boolean(),
})

export type AboutYouStepType = z.infer<typeof aboutYouStepSchema>

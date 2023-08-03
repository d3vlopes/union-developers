import { generateId } from '@/utils'

import { termsMock } from '../../steps/AboutYou/components/Terms/mock'

import { SubscriptionSectionProps } from '../..'

export const subscriptionMock: SubscriptionSectionProps = {
  id: 'formulario',
  title: 'Junte-se ao time!',
  initialStepDescription:
    'Tem interesse em participar do Union? Confira abaixo os requisitos para participar',
  formStepsDescription:
    'Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário',
  requirements: [
    'Ter mais que 18 anos',
    'Ter 1 ano ou mais de estudo em programação',
    'Ainda não trabalhar na área',
    'Já ter criado projetos sozinho que não sejam de cursos ou eventos',
    'Não participar de bootcamps ou programas de capacitação',
    'Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto',
    'Ter disponibilidade para participar das reuniões do time, durante a semana e finais de semana',
  ],
  buttonText: 'Inscrever-se',
  formStepNavLinks: [
    {
      id: generateId(),
      stepTitle: 'Dados pessoais',
      stepNumber: 1,
    },
    {
      id: generateId(),
      stepTitle: 'Informações técnicas',
      stepNumber: 2,
    },
    {
      id: generateId(),
      stepTitle: 'Sobre você',
      stepNumber: 3,
    },
    {
      id: generateId(),
      stepTitle: 'Enviar',
      stepNumber: 4,
    },
  ],
  terms: termsMock,
}

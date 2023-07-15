import { StepModel } from '@/domain/models'

export const stepsMock: StepModel[] = [
  {
    id: '1',
    title: 'Pré-inscrição',
    description:
      'Inicie a sua inscrição preenchendo o nosso formulário',
    number: 1,
  },
  {
    id: '4',
    title: 'Entrevista',
    description:
      'Nessa fase iremos bater um papo para que possamos conhecer melhor você',
    number: 4,
  },
  {
    id: '3',
    title: 'Desafio técnico',
    description: 'Após a análise você receberá um desafio prático',
    number: 3,
  },
  {
    id: '2',
    title: 'Análise do formulário',
    description: 'O nosso time irá analisar suas informações',
    number: 2,
  },
]

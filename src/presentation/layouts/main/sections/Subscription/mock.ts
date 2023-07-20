import { SubscriptionSectionProps } from '.'

export const subscriptionMock: SubscriptionSectionProps = {
  id: 'subscription',
  title: 'Junte-se ao time!',
  description:
    'Tem interesse em participar do Union? Confira abaixo os requisitos para participar',
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
}

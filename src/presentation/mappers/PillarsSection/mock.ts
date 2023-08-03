import { PillarsSectionRemote } from '@/api/models'
import { methodologyCardsMock } from '@/presentation/components/molecules/MethodologyCards/mock'

export const pillarsSectionMapperMock: PillarsSectionRemote = {
  sectionId: 'pillars',
  heading: 'Pilares',
  description:
    'Na Union combinamos o uso de 3 metodologias para você conquistar experiência, saber se posicionar profissionalmente e acelerar sua evolução!',
  methodologys: methodologyCardsMock.map((methodology) => ({
    id: methodology.id,
    name: methodology.title,
    description: methodology.description,
  })),
}

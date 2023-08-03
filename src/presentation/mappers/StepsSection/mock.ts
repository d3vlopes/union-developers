import { StepsSectionRemote } from '@/api/models'
import { stepsMock } from '@/presentation/components/molecules/Steps/mock'

export const stepSectionMapperMock: StepsSectionRemote = {
  sectionId: 'steps',
  heading: 'Etapas',
  description: 'Conheça as etapas do nosso processo seletivo',
  stepsProcessSeletive: stepsMock,
}

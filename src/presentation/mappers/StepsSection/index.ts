import { StepsSectionType } from '@/domain/models'

import { StepsSectionRemote } from '@/api/models'

export class StepsSectionMapper {
  static toDomain(
    stepsSectionRemote: StepsSectionRemote,
  ): StepsSectionType {
    return {
      id: stepsSectionRemote.sectionId,
      heading: stepsSectionRemote.heading,
      description: stepsSectionRemote.description,
      steps: stepsSectionRemote.stepsProcessSeletive,
    }
  }
}

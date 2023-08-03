import {
  StepSection as StepSectionApi,
  Step,
} from '@/api/generated/graphql'

export type StepsSectionRemote = Pick<
  StepSectionApi,
  'description' | 'heading' | 'sectionId'
> & {
  stepsProcessSeletive: Omit<Step, 'stage' | '__typename'>[]
}

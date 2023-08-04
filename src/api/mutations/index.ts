export const CREATE_SUBSCRIPTION = `
  mutation CreateSubscriber(
    $fullName: String!
    $age: Int!
    $email: String!
    $github: String!
    $linkedin: String!
    $developmentSide: String!
    $timeLearning: String!
    $linkRepoBestProject: String!
    $aboutBestProject: String!
    $youMotivation: String!
    $timeManagement: String!
    $aboutFeedback: String!
    $howDidYouKnow: String!
    $becauseParticipate: String!
    $reasonForSelected: String!
    $isTermsAccepted: Boolean!
  ) {
    createSubscriptionForm(
      data: {
        fullName: $fullName
        age: $age
        email: $email
        github: $github
        linkedin: $linkedin
        developmentSide: $developmentSide
        timeLearning: $timeLearning
        linkRepoBestProject: $linkRepoBestProject
        aboutBestProject: $aboutBestProject
        youMotivation: $youMotivation
        timeManagement: $timeManagement
        aboutFeedback: $aboutFeedback
        howDidYouKnow: $howDidYouKnow
        becauseParticipate: $becauseParticipate
        reasonForSelected: $reasonForSelected
        isTermsAccepted: $isTermsAccepted
      }
    ) {
      id
    }
}
`

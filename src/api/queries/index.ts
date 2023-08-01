import { gql } from '@apollo/client'

export const GET_MAIN = gql`
  query Main {
    page(where: { id: "clkrmn77r1qcn0bkiyuxchaor" }) {
      header {
        logo {
          description
          url
        }
        navigationLinks {
          label
          target
        }
        buttonTarget
        buttonText
      }
      hero {
        logo {
          description
          url
        }
        buttonTarget
        buttonText
        backgroundDesktop {
          url
        }
        backgroundMobile {
          url
        }
        title {
          html
        }
        subtitle
      }
      aboutSection {
        sectionId
        heading
        description {
          html
        }
      }
      stepsSection {
        sectionId
        heading
        description
        stepsProcessSeletive {
          description
          number
          title
          id
        }
      }
      rememberActionSection {
        buttonText
        buttonTarget
        subitle
        title
        logo {
          description
          url
        }
      }
      pillarsSection {
        ... on PillarSection {
          description
          heading
          sectionId
          methodologys {
            description
            id
            name
          }
        }
      }
      benefitsSection {
        sectionId
        heading
        description
        highlights {
          description
          stage
          title
          id
          icon {
            description
            url
          }
        }
      }
      testimonialSection {
        sectionId
        heading
        description
        testimonials {
          id
          imgUrl
          name
          testimonialText
          socialLinks {
            id
            name
            icon {
              url
            }
            url
          }
        }
      }
      faqSection {
        sectionId
        heading
        questions {
          title
          content {
            html
          }
        }
      }
      footer {
        companySlogan
        companyName
        logo {
          description
          url
        }
        socialLinks {
          icon {
            url
          }
          id
          name
          url
        }
      }
    }
  }
`

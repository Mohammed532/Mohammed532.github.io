import { gql } from '@/__generated__/gql'

export const GET_SKILL_LIST = gql(`
  query GetSkillList($filters: SkillListFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    skillLists(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          skill
          type
          proficiency
        }
      }
    }
  }
`)

export const GET_EXPERIENCES = gql(`
  query Experiences {
    experiences {
      data {
        id
        attributes {
          job_description
          job_title
          skill_lists {
            data {
              attributes {
                skill
              }
            }
          }
          time_span {
            end_date
            start_date
          }
        }
      }
    }
  }
`)

export const GET_PROJECTS = gql(`
  query Projects {
    projects {
      data {
        id
        attributes {
          description
          imgs {
            data {
              attributes {
                alternativeText
                url
                width
                height
              }
            }
          }
          links {
            clip
            code
            demo
            design
          }
          skill_lists {
            data {
              attributes {
                skill
              }
            }
          }
          title
        }
      }
    }
  }
`)
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
  query ExperiencesQuery {
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
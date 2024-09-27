import { gql } from '@/__generated__/gql'

export const GET_SKILL_LIST = gql(`
query GetSkillList($filters: SkillListFiltersInput, $pagination: PaginationArg) {
  skillLists(filters: $filters, pagination: $pagination) {
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
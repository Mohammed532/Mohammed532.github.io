import { ApolloError, useQuery } from "@apollo/client"
import { GET_SKILL_LIST } from "@/app/_qraphql/queries"

type SkillType = 'Web Dev' | 'Engineering' | 'Design' | 'Soft Skills' | 'Other';
type SkillTableData = {
    [S in SkillType]?: {
        id: number,
        skill: string,
        profiency: 'advanced' | 'intermediate' | 'beginner'
    }[]
}

export default function GetSkillList(){
    const { data, loading, error } = useQuery(GET_SKILL_LIST, {
        variables: {
            "filters": {
                "show_on_site": {
                  "eq": true
                }
              },
            "pagination": {  
                "pageSize": 100 // returns at most 100 results
              }
        }
    });
    
    let t_data: SkillTableData = {}; // tabelurized data

    if(data){
        data.skillLists?.data.forEach(sd => {
            if(!t_data.hasOwnProperty(sd.attributes?.type as string)){ // check if t_data[skillType] exist
                // @ts-ignore: Type 'undefined' cannot be used as an index type.ts(2538)
                t_data[sd.attributes?.type] = []
            }
            // @ts-ignore: Type 'undefined' cannot be used as an index type.ts(2538)
            t_data[sd.attributes?.type].push({
                id: sd.id,
                skill: sd.attributes?.skill,
                proficiency: sd.attributes?.proficiency
            })
        })
    }

    return [t_data, loading, error];
}
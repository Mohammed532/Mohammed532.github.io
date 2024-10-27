import { ApolloError, useQuery } from "@apollo/client"
import { GET_SKILL_LIST } from "@/app/_qraphql/queries"
import { useEffect, useState } from "react";

type SkillType = 'Web Dev' | 'Engineering' | 'Design' | 'Soft Skills' | 'Other';
type SkillTableData = {
    [S in SkillType]?: {
        id: number,
        skill: string,
        proficiency: 'advanced' | 'intermediate' | 'beginner'
    }[]
};

export default function GetSkillList(){
    const [s_data, setData] = useState<SkillTableData | undefined>(undefined);
    const [s_loading, setLoading] = useState(true);
    const [s_error, setError] = useState<ApolloError | undefined>(undefined);
    const { data, loading, error } = useQuery(GET_SKILL_LIST, {
        variables: {
            "filters": {
                "show_on_site": {
                  "eq": true
                }
              },
            "pagination": {  
                "pageSize": 100 // returns at most 100 results
              },
            "sort": "proficiency"
        }
    });
    
    // formatted data for better handling
    let t_data: SkillTableData = {}; // tabelurized data

    useEffect(() => {
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
                    proficiency: sd.attributes?.proficiency?.slice(2)
                })
            })
        setData(t_data);

        } else if(error) {
            setError(error);
        }
        setLoading(loading);
    }, [data, loading, error]);


    return [s_data, s_loading, s_error];
}

export type { SkillTableData };
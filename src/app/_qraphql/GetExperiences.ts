import { useState, useEffect } from "react"
import { ApolloError, useQuery } from "@apollo/client"
import { GET_EXPERIENCES } from "@/app/_qraphql/queries"

type ExTableData = {
    id: string | number | null | undefined,
    time_span: [string, string | null]; // [start_date, end_date]
    job_title: string,
    job_description: string,
    skills: string[] | null,
}

export default function GetExperiences(){
    const { data, loading, error } = useQuery(GET_EXPERIENCES);
    const [ex_data, setData] = useState<ExTableData[] | undefined>(undefined);
    const [ex_loading, setLoading] = useState<boolean>(true);
    const [ex_error, setError] = useState<ApolloError | undefined>(undefined);

    // formatted data for better handling
    let t_data: ExTableData[] = [];
    useEffect(() => {
        if (data) {
            data.experiences?.data.forEach((exp_data => {
                t_data.push({
                    id: exp_data.id,
                    time_span: [
                        exp_data.attributes?.time_span.start_date as string,
                        exp_data.attributes?.time_span.end_date as string | null
                    ],
                    job_title: exp_data.attributes?.job_title as string, // data is required, should never be null
                    job_description: exp_data.attributes?.job_description as string, // data is required, should never be null
                    skills: exp_data.attributes?.skill_lists?.data.map(s_obj => (s_obj.attributes?.skill) as string) || null
                })
            }))
            setData(t_data);
        } else if (error) {
            setError(error);
        }
        setLoading(loading);
    }, [data, loading, error])

    return [ex_data, ex_loading, ex_error];
}

export type { ExTableData }
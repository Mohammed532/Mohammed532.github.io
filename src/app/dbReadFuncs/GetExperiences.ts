import { useState, useEffect } from "react"
import { ApolloError, useQuery } from "@apollo/client"

type ExTableData = {
    id: string | null | undefined,
    time_span: [string, string | null]; // [start_date, end_date]
    job_title: string,
    job_description: string,
    skills: string[] | null,
}

export default function GetExperiences(){
    const [ex_data, setData] = useState<ExTableData[] | undefined>(undefined);
    const [ex_loading, setLoading] = useState<boolean>(true);
    const [ex_error, setError] = useState<ApolloError | undefined>(undefined);

    // formatted data for better handling
    let t_data: ExTableData[] = [];
    useEffect(() => {
            setData(t_data);
    }, [])

    return [ex_data, ex_loading, ex_error];
}

export type { ExTableData }
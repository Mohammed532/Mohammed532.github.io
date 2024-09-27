import { useState, useEffect } from "react"
import { ApolloError, useQuery } from "@apollo/client"
import { GET_EXPERIENCES } from "@/app/_qraphql/queries"

export default function GetExperiences(){
    const { data, loading, error } = useQuery(GET_EXPERIENCES);
    const [ex_data, setEXData] = useState<any>(undefined);
    const [ex_loading, setEXLoading] = useState<boolean>(loading);
    const [ex_error, setEXError] = useState<ApolloError | undefined>(error);

    useEffect(() => {
        setEXLoading(loading);
        setEXError(error);
        setEXData(data);
    }, [data, loading, error])

    return [ex_data, ex_loading, ex_error];
}
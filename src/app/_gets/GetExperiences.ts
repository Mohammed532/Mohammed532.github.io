import { useState, useEffect, useContext } from "react"
import { ApolloError, useQuery } from "@apollo/client"
import FSContext from "../_context/FirebaseContext";
import { collection, getDocs } from "firebase/firestore";

type ExpTableData = {
    id: string | null | undefined,
    time_span: [string, string | null]; // [start_date, end_date]
    job_title: string,
    job_description: string,
    skills: string[] | null,
}

export default function GetExperiences(){
    const fs  = useContext(FSContext);
    
    const [exp_data, setData] = useState<ExpTableData[] | undefined>(undefined);
    const [exp_loading, setLoading] = useState<boolean>(true);
    const [exp_error, setError] = useState<ApolloError | undefined>(undefined);

    // formatted data for better handling
    let t_data: ExpTableData[] = [];
    useEffect(() => {
        const readfs = async() => {
            try {
                const expSnap = getDocs(collection(fs.fstore, 'experiences'));
                console.log(expSnap);
                
            } catch(err) {
                console.log(err);
                
            }
        }
            setData(t_data);
    }, [])

    return [exp_data, exp_loading, exp_error];
}

export type { ExpTableData }
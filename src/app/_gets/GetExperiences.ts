'use client'

import { useState, useEffect, useContext } from "react"
import FSContext from "../_context/FirebaseContext";
import { query, collection, DocumentReference, getDocs, orderBy, Timestamp } from "firebase/firestore";

type ExpTableData = {
    id: string,
    time_span: [Date, Date | null]; // [start_date, end_date]
    job_title: string,
    job_description: string,
    skills: string[] | null,
}

export default function GetExperiences(){
    const fs  = useContext(FSContext);
    
    const [exp_data, setData] = useState<ExpTableData[] | undefined | null>(undefined);
    const [exp_loading, setLoading] = useState(true);
    const [exp_error, setError] = useState<Error | undefined | null>(undefined);

    useEffect(() => {
        const readfs = async() => {
            try {
                // formatted data for better handling
                let t_data: ExpTableData[] = [];
                const expSnap = await getDocs(query(
                    collection(fs.fstore, 'experiences'),
                    orderBy('startDate', 'asc')
                ));

                // throw error if query return empty
                if (expSnap.empty) {throw new Error('Failed data read: Query returned empty')};
                
                // format data and place in table (t_data)
                expSnap.forEach(doc => {
                    let data = doc.data();

                    // dates
                    let sdate = data.startDate.toDate() as Date;
                    let edate = data.endDate ? data.endDate.toDate() as Date : null;

                    t_data.push({
                        id: doc.id,
                        time_span: [sdate, edate],
                        job_title: doc.id,
                        job_description: data.description,
                        skills: data.skills.map((ref: DocumentReference) => ref.id)
                    });
                    
                    setData(t_data);
                    setError(null);
                    setLoading(false);
                });
                
            } catch(err: unknown) {
                if(err instanceof Error) {
                    console.error(err);
                    setError(err);
                } else {
                    let e = new Error("Unknown error was thrown");
                    console.error(e);
                    setError(e);
                }
                setData(null);
                setLoading(false);
            }
        }
        readfs();
    }, [])

    return [exp_data, exp_loading, exp_error];
}

export type { ExpTableData }
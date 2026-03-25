'use client'

import { useState, useEffect, useContext } from "react"
import { query, collection, getDocs, orderBy, DocumentReference } from "firebase/firestore";
import FSContext from "../_context/FirebaseContext";

type LinkType = 'demo' | 'design' | 'code' | 'clips'
type ProjectsTableData = {
    id: string
    img: {
        alt: string | undefined,
        url: string,
    } | null
    title: string // project name
    description: string // description of project
    skills: string[] | null // list of skills used for project
    links: {[L in LinkType]?: string} | null // various project links
}

// TODO: Fix meaningless ts errors
export default function GetProjects(): [ProjectsTableData[] | undefined | null, boolean, Error | undefined | null] {
    const fs = useContext(FSContext);

    const [pr_data, setData] = useState<ProjectsTableData[] | undefined | null>(undefined);
    const [pr_loading, setLoading] = useState<boolean>(true);
    const [pr_error, setError] = useState<Error | undefined | null>(undefined);

    useEffect(() => {
        const readfs = async() => {
            try {
                let t_data: ProjectsTableData[] = [];
                const projSnap = await getDocs(query(
                    collection(fs.fstore, 'projects'),
                    orderBy('gridSort', 'asc')
                ));

                // throw error if query return empty
                if (projSnap.empty) {throw new Error('Failed data read: Query returned empty')};
                
                //format data and place in table (t_data)
                projSnap.forEach(doc => {
                    let data = doc.data();
                    let skills = data.skills.map((sref: DocumentReference) => sref.id);

                    t_data.push({
                        id: data.gridSort,
                        img: {
                            alt: data.imgAlt,
                            url: data.imgLink
                        },
                        title: doc.id,
                        description: data.description,
                        skills: skills,
                        links: data.links
                    });
                });

                setData(t_data);
                setError(null);
                setLoading(false);

            } catch (err: unknown) {
                if(err instanceof Error){
                    console.error(err);
                    setError(err);
                } else {
                    let e = new Error("Uknown error was thrown");
                    console.error(e);
                    setError(e);
                }
                setData(null);
                setLoading(false);
            }
        }
        readfs();
    }, [])

    return [pr_data, pr_loading, pr_error];
}

export type { ProjectsTableData }
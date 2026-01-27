import { useState, useEffect, useContext } from "react"
import { ApolloError, useQuery } from "@apollo/client"
import _, { omit } from 'underscore'
import ImageHostContext from "../_context/ImageHostContext"
import { collection, getDocs } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import FSContext from "../_context/FirebaseContext";

type LinkType = 'demo' | 'design' | 'code' | 'clips'
type ProjectsTableData = {
    id: string
    img: {
        alt: string | null,
        url: string,
        width: number,
        height: number
    } | null
    title: string // project name
    description: string // description of project
    skills: string[] | null // list of skills used for project
    links: {[L in LinkType]?: string} | null // various project links
}

// TODO: Fix meaningless ts errors
export default function GetProjects(): [ProjectsTableData[], boolean, FirebaseError | undefined] {
    const fs = useContext(FSContext);

    const imageHostUrl = useContext(ImageHostContext);
    const [pr_data, setData] = useState<ProjectsTableData[]>([]);
    const [pr_loading, setLoading] = useState<boolean>(true);
    const [pr_error, setError] = useState<FirebaseError | undefined>(undefined);

    // formatted data for better handling
    let t_data: ProjectsTableData[] = [];

    useEffect(() => {
        const readfs = async() => {
            try {
                const projSnap = getDocs(collection(fs.fstore, 'projects'));
                console.log(projSnap)
            } catch (error) {
                
            }
        }
    }, [])

    return [pr_data, pr_loading, pr_error];
}

export type { ProjectsTableData }
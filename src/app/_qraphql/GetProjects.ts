import { useState, useEffect, useContext } from "react"
import { ApolloError, useQuery } from "@apollo/client"
import _, { omit } from 'underscore'
import { GET_PROJECTS } from "@/app/_qraphql/queries"
import ImageHostContext from "../_context/ImageHostContext"

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
export default function GetProjects(): [ProjectsTableData[], boolean, ApolloError] {
    const { data, loading, error } = useQuery(GET_PROJECTS);
    const imageHostUrl = useContext(ImageHostContext);
    const [pr_data, setData] = useState<ProjectsTableData[] | undefined>(undefined);
    const [pr_loading, setLoading] = useState<boolean>(true);
    const [pr_error, setError] = useState<ApolloError | undefined>(undefined);

    // formatted data for better handling
    let t_data: ProjectsTableData[] = [];

    useEffect(() => {
        if (data) {
            data.projects?.data.forEach((proj_data => {
                let proj = {
                    id: proj_data.id as string,
                    title: proj_data.attributes?.title as string,
                    description: proj_data.attributes?.description as string,
                    img: {
                        alt: "Default Project Image",
                        url: `${imageHostUrl}/uploads/project_default_c32d4c2e06.jpg`,
                        width: 640,
                        height: 640
                    },
                    skills: null,
                    links: null
                }

                if(proj_data.attributes?.imgs?.data.length){ // if no img is uploaded to strapi, data.length = 0
                    // proj.img was being annoying with ts. Stupid fix
                    Object.assign(proj, {
                        img: {
                            alt: proj_data.attributes.imgs.data[0].attributes?.alternativeText as string | null,
                            url: `${imageHostUrl}${proj_data.attributes.imgs.data[0].attributes?.url}` as string,
                            width: proj_data.attributes.imgs.data[0].attributes?.width as number,
                            height: proj_data.attributes.imgs.data[0].attributes?.height as number
                        }
                    })
                }

                if(proj_data.attributes?.skill_lists?.data.length){ // if no skill list is uploaded to strapi, data.length = 0
                    Object.assign(proj, {
                        skills: proj_data.attributes.skill_lists.data.map(s => (s.attributes?.skill as string))
                    })
                }

                if(proj_data.attributes?.links){
                    // filter links that are null out by keys
                    let links = proj_data.attributes?.links;
                    let link_keys = Object.keys(links).filter(link => (links[link] != null && link != '__typename'));
                    let filtered_link_obj = {}
                    link_keys.forEach(kL => {filtered_link_obj[kL] = links[kL]});
                    console.log(filtered_link_obj);
                    
                    Object.assign(proj, {
                        links: filtered_link_obj,
                    })
                }

                t_data.push(proj)
            }))
            console.log(t_data);
            
            setData(t_data);
        } else if (error) {
            setError(error);
        }
        setLoading(loading);
    }, [data, loading, error])

    return [pr_data, pr_loading, pr_error];
}

export type { ProjectsTableData }
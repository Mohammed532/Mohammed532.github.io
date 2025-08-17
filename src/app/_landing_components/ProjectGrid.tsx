'use client'

import { motion } from "framer-motion" 
import GetProjects, { ProjectsTableData } from '@/app/_qraphql/GetProjects'
import { projects } from "@/data/resume-data"

// types for props
type LinkType = 'Demo' | 'Design' | 'Code' | 'Clips'

type ProjectGridProps = {
    projects: {
        img: string // path to card image
        title: string // project name
        description: string // description of project
        skills: string[] // list of skills used for project
        links?: {[L in LinkType]?: string} // various project links
    }[]
}

type ProjectCardProps = {
    project: ProjectsTableData,
    side: 'left' | 'right',
}

export default function ProjectGrid(){
    // const [data, loading, error] = GetProjects();
    // if (loading) return <Loader />
    // if (error) return <Error />
   
    let data = projects;

    // let t_data = data ? data : [] // TODO there's a better way of doing this, it's late tho n im tired

    let p_col_1 = data.slice(0, Math.ceil(data.length / 2)) 
    let p_col_2 = data.slice(Math.ceil(data.length / 2))

    const GAP = 'gap-5' // gap width set using tailwind property (1=0.25rem) (setting just number causes bug)
    
    return (
        <div className={`flex flex-col justify-center ${GAP} md:flex-row`}>
            <div className={`flex flex-col justify-center ${GAP} md:justify-start`}>
                {p_col_1.map(p => (
                    <ProjectCard key={p.id} project={p} side='left'/>
                ))}
            </div>
            <div className={`flex flex-col justify-center ${GAP} md:justify-start`}>
                {p_col_2.map(p => (
                    <ProjectCard key={p.id} project={p} side='right'/>
                ))}
            </div>
        </div>
    )
    
}

function ProjectCard({ project, side }: ProjectCardProps){

    return (
        <motion.div className={`card bg-accent shadow-xl max-w-96`}
         initial={side === 'right' ? { opacity: 0, x: 200 } : {opacity: 0, x: -200}}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
        >
            <figure>
                <img src={project.img?.url} alt={project.img?.url} />
            </figure>
            <div className="card-body">
                <h2 className="class-title text-white">{project.title}</h2>
                <p>{project.description}</p>
                <div className={`card-actions ${side === 'right' ? 'justify-start' : 'justify-end'}`}>
                    {project.skills && project.skills.map((s, idx) => (<div className="badge badge-[--cs-background] p-3" key={`ps-${idx}`}>{s}</div>))}
                </div>
                {project.links && // only render if project.links exists
                <>
                <div className="divider divider-[--cs-background]">Links</div>
                <div className="flex flex-row flex-wrap">
                    {Object.entries(project.links)
                     .sort(([kA], [kB]) => kA.localeCompare(kB)) // sort by key
                     .map(([k,v]) => (
                        <a key={k} href={v} className="uppercase text-secondary hover:text-[--cs-background] mx-5">{k}</a>
                    ))}
                </div>
                </>
                }

            </div>
        </motion.div>
    )

}

function Loader(){
    return(
        <>
            <p>loading</p>
        </>
    )
}

function Error(){
    return(
        <>
            <p>Error</p>
        </>
    )
}
'use client'

import { motion } from "framer-motion" 

// types for props
type ProjectGridProps = {
    projects: {
        img: string // path to card image
        title: string // project name
        description: string // description of project
        skills: string[] // list of skills used for project
    }[]
}

type ProjectCardProps = {
    project: {
        img: string // path to card image
        title: string // project name
        description: string // description of project
        skills: string[] // list of skills used for project
    },
    side: 'left' | 'right',
}

export default function ProjectGrid({ projects }: ProjectGridProps){
    let p_col_1 = projects.slice(0, Math.ceil(projects.length / 2)) 
    let p_col_2 = projects.slice(Math.ceil(projects.length / 2))

    const GAP = 5 // gap width set using tailwind property (1=0.25rem)
    
    return (
        <div className={`flex flex-col justify-center gap-${GAP} md:flex-row`}>
            <div className={`flex flex-col justify-center gap-${GAP} md:justify-end`}>
                {p_col_1.map((p, idx) => (
                    <ProjectCard key={idx} project={p} side='left'/>
                ))}
            </div>
            <div className={`flex flex-col justify-center gap-${GAP} md:justify-start`}>
                {p_col_2.map((p, idx) => (
                    <ProjectCard key={idx} project={p} side='right'/>
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
         viewport={{ margin: '99999px 0px 0px -80px' }}>
            <figure>
                <img src={project.img} alt={`Image of project ${project.title}`} />
            </figure>
            <div className="card-body">
                <h2 className="class-title text-white">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    {project.skills.map((s, idx) => (<div className="badge badge-[--cs-background] p-3" key={`ps-${idx}`}>{s}</div>))}
                </div>
            </div>
        </motion.div>
    )

}
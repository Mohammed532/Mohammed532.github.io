'use client'

import { AnimationSequence, At, motion, Transition, useAnimate } from 'framer-motion'
import { useState } from 'react'
import useWindowDimensions from '../_hooks/useWindowDimensions'
import GetExperiences, { ExTableData } from '../_qraphql/GetExperiences'
import { experience } from '@/data/resume-data'

// types
type TimelineItemProp = {
    exp: ExTableData, 
    idx: number,
    alternate: boolean,
    clickItemHandler: React.MouseEventHandler<HTMLLIElement>,
    animation_margins: {
        EXP_MARGIN: string,
        SKILL_MARGIN: string
    }
}

export default function Timeline() {
    // const [data, loading, error] = GetExperiences();
    
    let data = experience;

    const [selectedId, setSelectedId] = useState<string[]>([]);
    const [scope, animate] = useAnimate();
    let {width} = useWindowDimensions();

    // ANIMATION CONSTANTS
    const EXP_MARGIN = '-900%';
    const SKILL_MARGIN = '-900%';

    // MD DEVICE WIDTH
    const MD_WIDTH = 767;

    // if (loading) return <Loader/>
    // if (error) return <Error />


    const selectItem: React.MouseEventHandler<HTMLLIElement> = (e) => {
        const id = e.currentTarget.id
        let sequence: AnimationSequence

        const skill_side = [
            {open: {marginLeft: '0%'}, close: {marginLeft: SKILL_MARGIN}},
            {open: {marginRight: '0%'}, close: {marginRight: SKILL_MARGIN}}
        ]
        
        if (!selectedId.includes(id)){
            //open animation
            sequence = [
                [`#exp-${id}`, { marginTop: '0%' }, {type: 'spring', duration: 1, bounce: 0.2}],
                [`#s-${id}`, skill_side[parseInt(id)%2].open, {type: 'spring', duration: 1, bounce: 0.2}]
            ]
            animate(sequence)
            setSelectedId(prev => [...prev, id])
        } else {
            // close animation
            sequence = [
                [`#s-${id}`, skill_side[parseInt(id)%2].close, {type: 'spring', duration: 0.3}],
                [`#exp-${id}`, { marginTop: EXP_MARGIN }, {type: 'spring', duration: 0.3 }]
            ]
            animate(sequence)
            setSelectedId(prev => prev.filter(pid => pid !== id))
        }

    }

    return(
        <ul ref={scope} className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical`}>
            {/* @ts-ignore: 'data' is possibly 'undefined', not possible in this case */}
            {data.map((exp, idx) => {
                if(width >= MD_WIDTH){
                    return (
                        <TimelineFullItem 
                          key={exp.id || idx} 
                          exp={exp} 
                          idx={idx} 
                          alternate={!!(idx%2)} 
                          clickItemHandler={selectItem} 
                          animation_margins={{EXP_MARGIN: EXP_MARGIN, SKILL_MARGIN: SKILL_MARGIN}}/>
                    )
                } else {
                    return (
                        <TimelineCompactItem 
                          key={exp.id || idx} 
                          exp={exp} idx={idx} 
                          alternate={!!(idx%2)} 
                          clickItemHandler={selectItem} 
                          animation_margins={{EXP_MARGIN: EXP_MARGIN, SKILL_MARGIN: SKILL_MARGIN}}/>
                    )
                }
            })}
        </ul>
    )
}

function TimelineFullItem({exp, idx, alternate, clickItemHandler, animation_margins}: TimelineItemProp) {
    let {EXP_MARGIN, SKILL_MARGIN} = animation_margins
    return (
        <li key={idx} id={`${idx}`} className="group" onClick={clickItemHandler} role='button'>
            <hr className='bg-accent'/>
            <div className={`${alternate ? 'timeline-end' : 'timeline-start md:text-end'} border-8 border-[#0e1022] rounded-lg hover:bg-accent hover:border-accent`} id='exp-details'>
                <time className="font-mono italic">{ISOtoCustomDateString(exp.time_span[0])} - {exp.time_span[1] ? ISOtoCustomDateString(exp.time_span[1]) : 'Present'}</time>
                <h2 className="text-lg font-black mt-2 whitespace-pre-line">{exp.job_title}</h2>
                <div className='h-full overflow-y-hidden'>
                    <motion.p id={`exp-${idx}`}
                    initial={{marginTop: EXP_MARGIN}}>
                        {exp.job_description}
                    </motion.p>
                </div>
            </div>
            <div className="timeline-middle">
                <svg width="20" xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor">
                    <circle cx="10" cy="10" r="10" data-testid="Ellipse"/>
                </svg>
            </div>
            <div className={`${alternate ? 'timeline-start md:text-end' : 'timeline-end'} w-full overflow-x-hidden`} id='skill-details'>
                {/* only show skills if skills exist in data */}
                {exp.skills && <motion.div id={`s-${idx}`} 
                initial={alternate ? {marginRight: SKILL_MARGIN} : {marginLeft: SKILL_MARGIN}}>
                    <h2 className="text-lg font-black mt-2 mx-2 text-white">Skills Used</h2>
                    <div className={`flex flex-wrap ${alternate ? 'justify-end' : 'justify-start'}`}>
                        {exp.skills.map((s, idx) => <div className="badge badge-accent badge-lg p6 m6" key={idx}>{s}</div>)}
                    </div>
                </motion.div>}
            </div>
            <hr className='bg-accent'/>
        </li>
    )
}

function TimelineCompactItem({exp, idx, clickItemHandler, animation_margins}: TimelineItemProp){
    let {EXP_MARGIN} = animation_margins
    return (
        <li key={idx} id={`${idx}`} className="group" onClick={clickItemHandler} role='button'>
            <hr className='bg-accent'/>
            <div className={`timeline-start md:text-end border-8 border-[#0e1022] rounded-lg hover:bg-accent hover:border-accent`} id='exp-details'>
                <time className="font-mono italic">{ISOtoCustomDateString(exp.time_span[0])} - {exp.time_span[1] ? ISOtoCustomDateString(exp.time_span[1]) : 'Present'}</time>
                <h2 className="text-lg font-black mt-2 whitespace-pre-line ">{exp.job_title}</h2>
                <div className='h-full overflow-y-hidden'>
                    <motion.div id={`exp-${idx}`}
                     initial={{marginTop: EXP_MARGIN}}>
                        <p>{exp.job_description}</p>
                        {exp.skills && <div className='pt-6'>
                            <h2 className="text-lg font-black mt-2 mx-2 text-secondary text-center">Skills Used</h2>
                            <div className={`flex flex-wrap justify-center`}>
                                {exp.skills.map((s, idx) => <div className="bg-accent rounded-xl p-2 m-1" key={idx}>{s}</div>)}
                            </div>
                        </div>}
                    </motion.div>
                </div>
            </div>
            <div className="timeline-middle">
                <svg width="20" xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor">
                    <circle cx="10" cy="10" r="10" data-testid="Ellipse"/>
                </svg>
            </div>
            <hr className='bg-accent'/>
        </li>
    )
}

function Loader(){
    return(
        <div className='flex justify-center'>
            <div className="my-8 md:w-5/6">
                <div className="flex my-4 justify-between">
                    <div className="skeleton h-4 w-24"></div>
                    <div className="hidden md:flex justify-self-stretch gap-5">
                        <div className="skeleton w-20"></div>
                        <div className="skeleton w-20"></div>
                        <div className="skeleton w-20"></div>
                    </div>
                </div>
                <div className="skeleton h-64"></div>
            </div>
        </div>
    )
}

function Error(){
    return(
        <p className='text-error text-center'>Error loading experiences. Please reload the page.</p>
    )
}

function ISOtoCustomDateString(isoString: string){
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const d = new Date(isoString);
    return `${months[d.getMonth()]} ${d.getFullYear()}`
}
'use client'

import { AnimationSequence, At, motion, Transition, useAnimate } from 'framer-motion'
import { useState } from 'react'
import useWindowDimensions from '../_hooks/useWindowDimensions'

// types
type TimelineProp = {
    experience: {
        time_span: string,
        job_title: string,
        job_description: string,
        skills: string[]
    }[]
}

type TimelineItemProp = {
    exp: {
        time_span: string,
        job_title: string,
        job_description: string,
        skills: string[]
    },
    idx: number,
    alternate: boolean,
    clickItemHandler: React.MouseEventHandler<HTMLLIElement>,
    animation_margins: {
        EXP_MARGIN: string,
        SKILL_MARGIN: string
    }
}

export default function Timeline({experience}: TimelineProp) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [scope, animate] = useAnimate();
    let {width, height} = useWindowDimensions()

    // ANIMATION CONSTANTS
    const EXP_MARGIN = '-900%'
    const SKILL_MARGIN = '-900%'

    // MD DEVICE WIDTH
    const MD_WIDTH = 767

    const selectItem: React.MouseEventHandler<HTMLLIElement> = (e) => {
        const id = e.currentTarget.id
        let sequence: AnimationSequence

        const skill_side = [
            {open: {marginLeft: '0%'}, close: {marginLeft: SKILL_MARGIN}},
            {open: {marginRight: '0%'}, close: {marginRight: SKILL_MARGIN}}
        ]
        
        if (selectedId) {
            // close animation
            sequence = [
                [`#s-${selectedId}`, skill_side[parseInt(selectedId)%2].close, {type: 'spring', duration: 0.3}],
                [`#exp-${selectedId}`, { marginTop: EXP_MARGIN }, {type: 'spring', duration: 0.3 }]
            ]
            animate(sequence)

            if (id === selectedId) {
                setSelectedId(null)
                
            } else {
                // open animation
                sequence = sequence.concat([
                    [`#exp-${id}`, { marginTop: '0%' }, {type: 'spring', duration: 1}],
                    [`#s-${id}`, skill_side[parseInt(id)%2].open, {type: 'spring', duration: 1}]
                ])
                console.log(sequence);
                
                animate(sequence)
                setSelectedId(id)
            }
        } else {
            // open animation
            sequence = ([
                [`#exp-${id}`, { marginTop: '0%' }, {type: 'spring', duration: 0.7}],
                [`#s-${id}`, skill_side[parseInt(id)%2].open, {type: 'spring', duration: 0.7}]
            ])
            animate(sequence)
            setSelectedId(id)
        }
    }



    return(
        <ul ref={scope} className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical`}>
            {experience.map((exp, idx) => {
                if(width >= MD_WIDTH){
                    return (
                        <TimelineFullItem exp={exp} idx={idx} alternate={!!(idx%2)} clickItemHandler={selectItem} animation_margins={{EXP_MARGIN: EXP_MARGIN, SKILL_MARGIN: SKILL_MARGIN}}/>
                    )
                } else {
                    return (
                        <TimelineCompactItem exp={exp} idx={idx} alternate={!!(idx%2)} clickItemHandler={selectItem} animation_margins={{EXP_MARGIN: EXP_MARGIN, SKILL_MARGIN: SKILL_MARGIN}}/>
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
                <time className="font-mono italic">{exp.time_span}</time>
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
                <motion.div id={`s-${idx}`} 
                initial={alternate ? {marginRight: SKILL_MARGIN} : {marginLeft: SKILL_MARGIN}}>
                    <h2 className="text-lg font-black mt-2 mx-2 text-white">Skills Used Even</h2>
                    <div className={`flex flex-wrap ${alternate ? 'justify-end' : 'justify-start'}`}>
                        {exp.skills.map((s, idx) => <div className="badge badge-accent badge-lg p6 m6" key={idx}>{s}</div>)}
                    </div>
                </motion.div>
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
                <time className="font-mono italic">{exp.time_span}</time>
                <h2 className="text-lg font-black mt-2 whitespace-pre-line ">{exp.job_title}</h2>
                <div className='h-full overflow-y-hidden'>
                    <motion.div id={`exp-${idx}`}
                     initial={{marginTop: EXP_MARGIN}}>
                        <p>{exp.job_description}</p>
                        <div className='pt-6'>
                            <h2 className="text-lg font-black mt-2 mx-2 text-secondary text-center">Skills Used</h2>
                            <div className={`flex flex-wrap justify-center`}>
                                {exp.skills.map((s, idx) => <div className="badge badge-accent badge-lg p6 m6" key={idx}>{s}</div>)}
                            </div>
                        </div>
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
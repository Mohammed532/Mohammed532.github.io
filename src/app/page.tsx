'use client'

import { useState, useEffect } from "react"
import { motion, useAnimate, stagger, useScroll, useInView} from "framer-motion"
import { skillList, experience, projects } from "@/data/resume-data"
import { ReactSVG } from "react-svg"

import Footer from "./footer"
import Toast from "./_ui/Toast"
import Timeline from "./_ui/Timeline"
import ContactList from "./_ui/ContactList"

export default function Home() {
    // for skill list animation
    const [scope, animate] = useAnimate()
    const inView = useInView(scope)

    // toast animation
    const { scrollY } = useScroll()

    let p_col_1 = projects.slice(0, Math.ceil(projects.length / 2)) 
    let p_col_2 = projects.slice(Math.ceil(projects.length / 2))

    useEffect(() => {
        if (inView){
            animate('div', { opacity: 1 }, {delay: stagger(0.15)})
        }
    }, [inView])


    // handler function for showing toast
    let handleToast = (t: number) => {
        const DELAY = 4
        const SCROLL_BUFFER = 50
        if (t === DELAY && scrollY.get() <= SCROLL_BUFFER) {
            return true;
        }

        return false;
    }

    return (
        <main id="main-page" className="overflow-x-hidden md:overflow-x-auto">
            <section className="flex flex-col gap-0-px justify-center content-center items-center md:justify-between md:flex-row" >
                <div className="pt-5 text-xl md:text-4xl md:mx-10 md:basis-1/2">
                    <h1 className="md:text-xl md:mb-5">hello world :)</h1>
                    <h1>My name is</h1>
                    <h1 className="emphasis">Mohammed Akinbayo</h1>
                    <h1>But you can call me... </h1>
                </div>
                <div className="flex flex-col items-center px-22 md:basis-1/2">
                    <ReactSVG src="./portfolio-molybdenum.svg" className="min-h-[300px] w-[300px] md:min-h-[400px] md:w-[400px]" />
                    <p className="md:w-full md:text-lg">Hehe, get it? <span className="emphasis">Mo?</span> Like the <span className="emphasis">Element?</span></p>
                    <p className="md:w-full md:text-lg">Anyways here's my contact info</p>
                    <div className="md:w-full divider divider-accent"></div>
                    <ContactList contacts={{
                        LinkedIn: 'https://www.linkedin.com/in/mohammed-akinbayo/',
                        Github: 'https://github.com/Mohammed532',
                        Email: 'm.m.akinbayo@gmail.com'
                    }}/>
                </div>
                <Toast text="Scroll Down For More Info" duration={6} showFn={handleToast}/>
            </section>
            <section className="flex py-10 flex-col justify-center content-center items-center md:flex-row">
                <div className="my-10 relative glow-border z-[1] mx-10 ">
                    <img 
                    src='/portfolio-headshot.jpg' 
                    alt="Headshot of Mohammed Akinbayo. And yes, he is quite good looking" 
                    width={256} height={256}
                    className="shadow-xl rounded-md relative z-[1]"/>
                </div>
                <div className="md:w-1/3 md:mx-10">
                    <h2>About Me</h2>
                    <p>I'm a <span className="emphasis">Howard University</span> student, 
                        working towards my B.S. in Computer Engineering. I have a wide 
                        arrange of interests, including <span className="emphasis">AI/ML</span>, 
                        <span className="emphasis">Frontend Developement</span>, <span className="empasis">IoT</span> 
                        , <span className="emphasis">Robotics</span>, and much more. I have used my skills and interests to 
                        do exceptional work at <span className="emphasis">NASA</span>, <span className="emphasis">Apple</span>, 
                        and <span className="emphasis">CoStar Group</span>. I'm hoping to 
                        grow my skills and continue my learning. I believe that the pursuit of 
                        knowledge is a lifelong journey, so please let me show you the 
                        fruits of that journey!
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center text-center">
                <h2>Skills</h2>
                <div className="flex flex-wrap justify-center" ref={scope}>
                    {skillList.map((s, idx) => <motion.div key={idx} className="badge badge-accent badge-lg" initial={{ opacity: 0 }}>{s}</motion.div>)}
                </div>
            </section>
            <section className="flex-col justify-center mt-40 mb-[50vh]">
                <h2 className="text-center">Experience</h2>
                <p className="text-center mb-5">A timeline of all <span className="emphasis">extracirricular</span> and <span className="emphasis">work</span> experience throughout my journey</p>
                <p className="text-center mb-5">(Click on any experience for more information about it)</p>
                <Timeline experience={experience} />
            </section>
            <section>
                <h2 className="text-center py-5">Projects</h2>
                <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-2">
                    <div className="flex flex-col justify-self-center md:justify-self-end gap-10">
                        {/* TODO: convert to grid layout, no need to split data anymore */}
                        {p_col_1.map((p, idx) => (
                        <motion.div className="card bg-accent shadow-xl max-w-96" key={idx}
                         initial={{ opacity: 0, x: -200 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.6 }}
                         viewport={{ margin: '99999px 0px 0px -80px' }}>
                            <figure>
                                <img src={p.img} alt={`Image of project ${p.title}`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="class-title text-white">{p.title}</h2>
                                <p>{p.description}</p>
                                <div className="card-actions justify-end">
                                    {p.skills.map((s, idx) => (<div className="badge badge-[--cs-background] p-3" key={`ps-${idx}`}>{s}</div>))}
                                </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-self-center gap-10 md:justify-self-start">
                        {p_col_2.map((p, idx) => (
                        <motion.div className="card bg-accent shadow-xl max-w-96" key={idx}
                         initial={{ opacity: 0, x: 200 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.6 }}
                         viewport={{ margin: '0px 0px 0px -80px' }}>
                            <figure>
                                <img src={p.img} alt={`Image of project ${p.title}`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="class-title text-white">{p.title}</h2>
                                <p>{p.description}</p>
                                <div className="card-actions justify-end">
                                    {p.skills.map((s, idx) => (<div className="badge badge-[--cs-background] p-3" key={`ps-${idx}`}>{s}</div>))}
                                </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

'use client'

import { useState, useEffect } from "react"
import { motion, useAnimate, stagger, useScroll, useInView} from "framer-motion"
import { skillList, experience, projects } from "@/data/resume-data"
import { ReactSVG } from "react-svg"

import { 
    Toast, 
    ContactList,} from '@/app/_ui'
import { ProjectGrid, SkillGrid, Timeline } from "@/app/_landing_components"
import Footer from "./footer"

export default function Home() {
    // for skill list animation
    const [scope, animate] = useAnimate()
    const inView = useInView(scope)

    // toast animation
    const { scrollY } = useScroll()

    // handler function for showing toast
    let handleToast = (t: number) => {
        const DELAY = 4
        const SCROLL_BUFFER = 50
        if (t === DELAY && scrollY.get() <= SCROLL_BUFFER) {
            return true;
        }

        return false;
    }

    // skill list animation
    if (inView){
        animate('div', { opacity: 1 }, {delay: stagger(0.15)})
    }

    return (
        <main id="main-page" className="overflow-x-hidden md:overflow-x-auto">
            <section className="flex flex-col gap-0-px justify-center content-center items-center md:justify-between md:flex-row" >
                <div className="pt-5 text-xl md:text-4xl md:mx-10 md:basis-1/2">
                    <h1 className="md:text-xl md:mb-5">hello_world :)</h1>
                    <h1>My name is</h1>
                    <h1 className="emphasis">Mohammed Akinbayo</h1>
                    <h1>But you can call me... </h1>
                </div>
                <div className="flex flex-col items-center px-22 md:basis-1/2">
                    <ReactSVG src="./portfolio-molybdenum.svg" className="min-h-[300px] w-[300px] md:min-h-[400px] md:w-[400px]" />
                    <p className="md:w-full md:text-lg">Hehe, get it? <span className="emphasis">Mo?</span> Like the <span className="emphasis">element?</span></p>
                    <p className="md:w-full md:text-lg">Anyways here&apos;s my contact info</p>
                    <div className="md:w-full divider divider-accent"></div>
                    <ContactList contacts={{
                        LinkedIn: 'https://www.linkedin.com/in/mohammed-akinbayo/',
                        Github: 'https://github.com/Mohammed532',
                        Email: 'm.m.akinbayo@gmail.com'
                    }}/>
                </div>
                <Toast text="Scroll Down For More!" duration={6} showFn={handleToast}/>
            </section>
            <section className="flex py-10 flex-col justify-center content-center items-center md:flex-row">
                <div className="my-10 relative glow-border z-[1] mx-10 ">
                    <img 
                    src='portfolio-headshot.jpg' 
                    alt="Headshot of Mohammed Akinbayo. And yes, he is quite good looking" 
                    width={256} height={256}
                    className="shadow-xl rounded-md relative z-[1]"/>
                </div>
                <div className="md:w-1/3 md:mx-10">
                    <h2>About_Me</h2>
                    <p>I&apos;m a <span className="emphasis">Howard University</span> student, 
                        working towards my B.S. in Computer Engineering. I have a wide 
                        arrange of interests, including <span className="emphasis">AI/ML</span>, 
                        <span className="emphasis">Frontend Developement</span>, <span className="emphasis">IoT</span> 
                        , <span className="emphasis">Robotics</span>, and much more. I have used my skills and interests to 
                        do exceptional work at <span className="emphasis">NASA</span>, <span className="emphasis">Apple</span>, 
                        and <span className="emphasis">CoStar Group</span>. I&apos;m hoping to 
                        grow my skills and continue my learning. I believe that the pursuit of 
                        knowledge is a lifelong journey, so please let me show you the 
                        fruits of that journey!
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center text-center my-40">
                <h2 className="mb-4">Skills</h2>
                <SkillGrid />
            </section>
            <section className="flex-col justify-center mt-4 mb-[50vh]">
                <h2 className="text-center">Experience</h2>
                <p className="text-center mb-5">A timeline of all <span className="emphasis">extracirricular</span> and <span className="emphasis">work</span> experience throughout my journey</p>
                <p className="text-center mb-5">(Click on any experience for more information about it)</p>
                <Timeline />
            </section>
            <section>
                <h2 className="text-center py-5">Projects</h2>
                <ProjectGrid/>
            </section>
            <Footer />
        </main>
    );
}

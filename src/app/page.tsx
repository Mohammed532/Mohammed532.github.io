'use client'

import { useState, useEffect } from "react"
import { motion, useAnimate, stagger, useScroll, useInView} from "framer-motion"
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
                    <h1 className="md:text-xl md:mb-5">hello world :)</h1>
                    <h1>My name is</h1>
                    <h1 className="emphasis">Mohammed Akinbayo</h1>
                    <h1>But you can call me... </h1>
                </div>
                <div className="flex flex-col items-center px-22 md:basis-1/2">
                    <ReactSVG src="./portfolio-molybdenum.svg" className="min-h-[300px] w-[300px] md:min-h-[400px] md:w-[400px]" />
                    {/* <p className="md:w-full md:text-lg">Hehe, get it? <span className="emphasis">Mo?</span> Like the <span className="emphasis">element?</span></p>
                    <p className="md:w-full md:text-lg">Anyways here&apos;s my contact info</p> */}
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
                <div className="m-10 hover-3d">
                    <img 
                    src='portfolio-headshot.jpg' 
                    alt="Headshot of Mohammed Akinbayo. And yes, he is quite good looking" 
                    width={326} height={326}
                    className="shadow-xl rounded-md relative z-1"/>
                      {/* 8 empty divs needed for the 3D effect */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <div className="md:w-1/2 md:mx-10">
                    <h2>About Me</h2>
                    <p>
                        I am a recent <span className="emphasis">Howard University</span> graduate with a <span className="emphasis">B.S. in Computer Engineering</span>. I specialize in both <span className="emphasis">full-stack web development</span> and <span className="emphasis">embedded systems</span>. In terms of programming, I am quite passionate about creating software solutions throughout the whole technology stack, from the most modern responsive web applications down to the firmware and robotics.
                    </p>
                    <p className="mt-5">
                        Thanks to my educational background and professional experience at <span className="emphasis">NASA</span>, <span className="emphasis">Apple</span>, <span className="emphasis">CoStar Group</span>, and <span className="emphasis">Northrop Grumman</span>, I have had a chance to gain valuable experience in AI, IoT, robotics, and scalable web technologies that allow me to find the most appropriate solution in places where hardware and software meet.
                    </p>
                    <p className="mt-5">
                        I am heavily driven by my curiosity and passion, and I am eager to push myself in solving complicated tasks on the whole technology stack. I wish to learn continuously throughout my life, so please feel free to browse and see the fruits of my learning!
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center text-center my-40">
                <h2 className="mb-5">Skills</h2>
                <SkillGrid />
            </section>
            <section className="flex-col justify-center mt-4 mb-[50vh]">
                <h2 className="text-center">Experience</h2>
                <p className="text-center mb-5">A timeline of all <span className="emphasis">extracirricular</span> and <span className="emphasis">work</span> experience throughout my journey</p>
                <p className="text-center mb-5">(Click on any experience for more information about it)</p>
                <Timeline />
            </section>
            <section>
                <h2 className="text-center py-5 mb-5">Projects</h2>
                <ProjectGrid/>
            </section>
            <Footer />
        </main>
    );
}

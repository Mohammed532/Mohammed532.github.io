'use client'

import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
    return (
        <footer className="m-10">
            <h1 className="text-center mt-40 mb-20 text-4xl">Stay Blessed :)</h1>
            <div className="flex flex-col justify-items-center content-center gap-4 md:justify-between md:flex-row">
                <p className="self-center italic text-center md:text-left">Made By Mohammed Akinbayo (Duh)</p>
                <div className="place-self-center">
                    <a role="button" className="btn btn-s btn-circle bg-accent mx-2" href="https://github.com/Mohammed532"><FiGithub className="text-xl" /></a>
                    <a role="button" className="btn btn-s btn-circle bg-accent mx-2" href="https://www.linkedin.com/in/mohammed-akinbayo/"><FiLinkedin className="text-xl" /></a>
                </div>
                <p className="self-center italic">Last Updated August 2024</p>
            </div>
        </footer>
    )
}
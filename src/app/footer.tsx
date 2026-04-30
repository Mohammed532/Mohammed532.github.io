'use client'

import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
    return (
        <footer className="m-10 mt-60">
            <div className="flex flex-col justify-items-center content-center gap-4 md:justify-between md:flex-row">
                <p className="self-center italic text-center md:text-left md:w-sm">Made By Mohammed Akinbayo</p>
                <div className="flex place-self-center justify-self-center justify-center order-last md:order-0 md:w-sm">
                    <a role="button" className="btn btn-s btn-circle bg-accent mx-2 hover:bg-primary hover:text-black" href="https://github.com/Mohammed532"><FiGithub className="text-xl" /></a>
                    <a role="button" className="btn btn-s btn-circle bg-accent mx-2 hover:bg-primary hover:text-black" href="https://www.linkedin.com/in/mohammed-akinbayo/"><FiLinkedin className="text-xl" /></a>
                </div>
                <p className="self-center italic text-center md:text-right">Last Updated {process.env.NEXT_PUBLIC_LAST_UPDATE ?? "MONTH-YEAR"}</p>
            </div>
        </footer>
    )
}

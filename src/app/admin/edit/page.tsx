'use client'

import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

export default function AdminEditPage() {
    return(
        <div className="edit-page">
            <div className="landing_stats grid grid-cols-2 gap-4 md:grid-cols-4">
                <StatCard amount={0} title="Skills"/>
                <StatCard amount={0} title="Experience"/>
                <StatCard amount={0} title="Projects"/>
                <StatCard amount={0} title="Blogs"/>
            </div>
            <div className="mt-10">
                <p className="mb-5">SECTIONS</p>
                <SectionEditCard title="Skills" icon={<GrHomeRounded/>} amount={0} link="/admin/edit/skills"/>
                <SectionEditCard title="Experiences" icon={<GrHomeRounded/>} amount={0} link="/admin/edit/experiences"/>
                <SectionEditCard title="Projects" icon={<GrHomeRounded/>} amount={0} link="/admin/edit/projects"/>
            </div>
        </div>
    )
}

function StatCard({amount, title}: {amount: number, title: string}) {
    return(
        <div className="stat_card bg-accent rounded-md p-4 flex flex-col justify-center items-center gap-2">
            <p className="stat_value text-4xl text-secondary">{amount}</p>
            <p className="stat_title">{title}</p>
        </div>
    )
}

function SectionEditCard({title, icon, amount, link}: {title: string, icon: React.ReactNode, amount: number, link: string}) {
    return(
        <Link className="section_edit_card bg-accent rounded-md p-4 flex justify-between items-center gap-2 mb-2" href={link}>
            <div className="flex items-center gap-6">
                <div className="text-2xl">{icon}</div>
                <div>
                    <p className="section_title text-xl">{title}</p>
                    <p className="section_amount text-sm">{amount} items</p>
                </div>
            </div>
            <IoIosArrowForward className=""/>
        </Link>
    )
}
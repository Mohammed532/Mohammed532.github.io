'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";

export default function AdminHeader() {
    let header_text = usePathname().split('/').length > 3 ? usePathname().split('/')[3] : "Dashboard";
    
    return(
        <div className="admin-header bg-base-100 border-b border-primary p-6 fixed top-0 w-full flex justify-between items-center">
            <div className="">
                <p className="text-secondary">Welcome Mo</p>
                <h1 className="text-2xl font-bold capitalize">{header_text}</h1>
            </div>
            <div>
                <Link href="/" className="btn btn-circle btn-primary"><GrHomeRounded /></Link>
            </div>
        </div>
    )
}   
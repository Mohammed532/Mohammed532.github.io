import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCodeBlockBold } from "react-icons/pi";


export default function AdminNavbar() {
    return(
        <div className="admin-navbar bg-base-100 border-t border-primary p-6 flex flex-row justify-around fixed bottom-0 w-full">
            <Link href="/admin/edit" className="flex flex-col items-center">
                <GrHomeRounded className="text-2xl"/>
                <p className="text-xs">/</p>
            </Link>
            <Link href="/admin/edit/blog" className="flex flex-col items-center">
                <IoDocumentTextOutline className="text-2xl"/>
                <p className="text-xs">/blog</p>
            </Link>
            <Link href="/admin/edit/projects" className="flex flex-col items-center">
                <PiCodeBlockBold className="text-2xl"/>
                <p className="text-xs">/proj</p>
            </Link>
        </div>
    )
}
'use client'

import { AdminHeader, AdminNavbar } from "./_component";
// TODO: implement view transition for admin page navigation
// import { ViewTransition } from "react";

export default function AdminEditTemplate({ children }: { children: React.ReactNode }) {
    return(
        <div className="admin">
            <AdminHeader />
            <div className="px-6 my-32">
                {children}
            </div>
            <AdminNavbar/>
        </div>
    )
}
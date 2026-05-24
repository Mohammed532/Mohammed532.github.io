'use client'

import { useContext } from "react";
import FSContext from "../../_context/FirebaseContext";

export default function AdminEditPage() {
    const fs = useContext(FSContext);

    const logout = async () => {
        await fs.auth.signOut();
        // NOTE: Redirect logic is handled in admin/layout.tsx
    }

    return(
        <div>
            <p>Login worked</p>
            <button className="btn" onClick={logout}>Logout</button>
        </div>
    )
}
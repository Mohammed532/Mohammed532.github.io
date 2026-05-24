'use client'

import { useEffect, useState, useContext } from "react"
import { usePathname, useRouter } from "next/navigation"
import FSContext from "../_context/FirebaseContext"
import { onAuthStateChanged } from "firebase/auth"

// This layout component will wrap all admin pages and handle authentication redirect logic
export default function AdminGaurdLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const fs = useContext(FSContext);

    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const authenticate = onAuthStateChanged(fs.auth, 
            async (currentUser) => {
                // not logged in
                if(!currentUser) {
                    console.log("No user signed in");
                    setLoading(false);
                    router.replace('/admin');
                    return;
                }

                // admin auth check
                const TOKEN = await currentUser?.getIdTokenResult(); 
                const isAdmin = TOKEN?.claims.admin === true;
                await currentUser.getIdToken(true);

                console.log(TOKEN);

                // admin login page auth check
                if(pathname === '/admin'){
                    if(isAdmin) {
                        router.replace('/admin/edit');
                        setLoading(false);
                    }
                }

                // other admin pages auth check
                if(!isAdmin) {
                    router.replace('/admin');
                    setLoading(false);
                }

                setLoading(false);
            });

            return () => authenticate();
        }, [fs.auth, pathname, router]);

    if(loading) {
        return <p>Loading...</p>
    }  
    
    return children;
}
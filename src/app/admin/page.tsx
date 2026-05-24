'use client'

import { useEffect, useContext } from "react";
import { GoogleAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import FSContext from "../_context/FirebaseContext";

const provider = new GoogleAuthProvider();

export default function AdminPage() {
    const fs = useContext(FSContext);

    useEffect(() => {
        getRedirectResult(fs.auth)
          .then((res) => {
            if(res?.user) {
                console.log("User signed in:", res.user);
                // NOTE: Redirect logic is handled in admin/layout.tsx
            }
          })
          .catch((error) => {
            console.error("Error during sign-in:", error);
          });
      }, [fs.auth]);

      const login = async () => {
        try {
            // attempt popup sign-in
            await signInWithPopup(fs.auth, provider);
        } catch (err: any) {
            console.error("Popup sign-in failed:", err);

            // fallback to redirect sign-in
            if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
                await signInWithRedirect(fs.auth, provider);
            }
        }
      }

    return (
        <div>
            <h1>Welcome Mo</h1>
            <button className="btn" onClick={login}>Login with Google</button>
        </div>
    );
}


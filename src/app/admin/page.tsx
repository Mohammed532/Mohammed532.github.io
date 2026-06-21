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
        <div className="flex flex-col justify-center content-center gap-5 h-dvh m-16">
            <h1 className="text-center">Welcome Mo</h1>
            <button className="btn bg-white text-black border-[#e5e5e5] p-6" onClick={login}>
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login to Admin Panel
            </button>
        </div>
    );
}


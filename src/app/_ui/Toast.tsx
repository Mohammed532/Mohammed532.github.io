'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type ToastProp = {
    text: string,
    delay?: number,
    duration?: number,
    showFn?: (t: number) => boolean
}

export default function Toast({ text, delay, duration, showFn }: ToastProp){
    const [showToast, setShowToast] = useState<boolean>(showFn === undefined)
    const [time, setTime] = useState<number>(0)

    let interval:ReturnType<typeof setInterval>;   

    let toastIntervalSetup = () => {
        if (showFn !== undefined){
            interval = setInterval(() => {
                setTime(t => t + 1)
                setShowToast(showFn(time))
            }, 1000)
            
            if (showToast) {
                clearInterval(interval)
            }
        }
    }

    useEffect(() => {
        toastIntervalSetup()
        return () => clearInterval(interval)
    }, [time])

    let de = delay ? delay : 1
    let du = duration ? duration : 10

    if (!showToast) {return <></>}

    return (
        <motion.div className="toast z-50"
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: [0, 1, 1, 0], x:[100, 0, 0, 100] }}
         transition={{ delay: de, duration: du, times:[0, 0.1, 0.99, 1] }}>
            <div className="alert alert-info max-w-[90vw] text-wrap text-left">
                <p>{text}</p>
            </div>
        </motion.div>
    )
}
import { useState, useEffect } from "react"

type UseTimerProp = {
    runtime: number,
    runtimeEndFn: () => void,
}

export default function useTimer({runtime, runtimeEndFn}: UseTimerProp){
    const [time, setTime] = useState<number>(0)

    useEffect(() => {
        let time_loop = setInterval(() => {
            setTime(t => t + 1)
            if (time === runtime) {runtimeEndFn()}
        }, 1000)

        return () => {
            endTimer(time_loop)
        }
    })
    let endTimer = (interval:ReturnType<typeof setInterval>) => {clearInterval(interval)}

    return [time, endTimer]
}
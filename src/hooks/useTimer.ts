import { 
    useState,
    useEffect,
} from "react"

interface ITimer {
    time: number
    startTimer: () => void
}

const useTimer = (seconds: number = 60, onFinish: () => void): ITimer => {
    const [timer, setTimer] = useState<NodeJS.Timeout>()
    const [time, setTime] = useState<number>(seconds)

    const startTimer = () => {
        const timerId = setInterval(() => {
            setTime(prev => prev-=1)
        }, 1000)

        setTimer(timerId)
    }

    useEffect(() => {        
        if (time<=0) {
            console.log('pizda')
            onFinish()
            clearInterval(timer)
        }
    }, [time]) // eslint-disable-line

    return { 
        time,
        startTimer,
    }
}

export default useTimer
import { 
    useState, 
    useEffect,
} from 'react';

interface IAttempts {
    attempts: number
    updateAttempts: () => void
    decrease: () => void
}

const useAttempts = (attempts: number = 5, onAttemptsEnd: () => void): IAttempts => {
    const [count, setCount] = useState(attempts)

    const updateAttempts = () => {
        setCount(attempts)
    }

    const decrease = () => {
        setCount(prev => prev-=1)
    }

    useEffect(() => {
        if (count<=0) {
            onAttemptsEnd()
        }
    }, [count]) // eslint-disable-line

    return {
        attempts: count,
        updateAttempts,
        decrease,
    }
}

export default useAttempts
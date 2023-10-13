import {
    useState,
    useRef,
    useEffect,
    FC,
    Dispatch,
    SetStateAction,
} from 'react'

import useAttempts from 'hooks/useAttempts'

import { generateCells } from 'utils/helpers.util'

import GameDetails from './components/game-details'

import './game.scss'

const Game: FC<{setIsGame: Dispatch<SetStateAction<boolean>>}> = ({setIsGame}) => {
    //states
    const [cells, setCells] = useState<string[]>([])
    const [similar, setSimilar] = useState<string>('')

    const [status, setStatus] = useState<string>('❌')

    const [score, setScore] = useState<number>(0)
    //refs
    const statusRef = useRef<HTMLSpanElement>(null)

    //funcs
    const endGame = (attempts: number) => {
        localStorage.setItem('score', score.toString())
        localStorage.setItem('errors', (Number(process.env.REACT_APP_GAME_ATTEMPTS)-attempts).toString())

        setIsGame(false)
    }

    const {attempts, updateAttempts, decrease} = useAttempts(Number(process.env.REACT_APP_GAME_ATTEMPTS), () => {
        endGame(attempts)
    })

    const generateLevel = (): void => {
        const {
        cells, 
        similar
        } = generateCells(16)

        setCells(cells)
        setSimilar(similar)
    }

    const handleSelect = (color: string, similar: string) => {
        setTimeout(() => {
            statusRef.current?.classList.remove('status-on')
        }, 1300)

        statusRef.current?.classList.add('status-on')

        if (color===similar) {
            setStatus('👍')
            setScore(prev => prev+=1)

            return generateLevel()
        }

        setStatus('❌')
        decrease()
    }

    useEffect(() => {
        generateLevel()
        updateAttempts()
    }, []) // eslint-disable-line

    return (
        <div className='game'>
            <div className="game-status_box">
                <span ref={statusRef}>
                    {
                    status
                    }
                </span>
            </div>
            <li className="game-cells_box">
                {
                    cells.map((color, key) => (
                    <ul className="game-cell" 
                        key={key}
                        onClick={()=>{
                        handleSelect(color, similar)
                        }} 
                        style={{backgroundColor: `rgb(${color})`}}
                    />
                    ))
                }
            </li>
            <GameDetails
                attempts={attempts}
                endGame={endGame}
            />
        </div>
    )
}

export default Game
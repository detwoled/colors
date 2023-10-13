import React, {
    useEffect,
    FC,
} from 'react'

import useTimer from 'hooks/useTimer'

interface IGameDetailsProps {
    attempts: number
    endGame: (attempts: number) => void
}

const GameDetails: FC<IGameDetailsProps> = ({
    attempts,
    endGame,
}) => {
    const {time, startTimer} = useTimer(Number(process.env.REACT_APP_GAME_TIME), () => {
        endGame(attempts)
    })

    useEffect(() => {
        startTimer()
    }, []) // eslint-disable-line

    return (
        <div className='game-details_box'>
            <p>
                {time}cек
            </p>
            <p>
                попыток: {attempts}
            </p>
        </div>
    )
}

export default React.memo(GameDetails)
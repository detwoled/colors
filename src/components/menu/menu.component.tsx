import {
    FC,
    Dispatch,
    SetStateAction,
} from 'react'

import { IStats } from 'interfaces/stats.interface'

import './menu.scss'

interface IMenuProps {
    stats: IStats | null
    setIsGame: Dispatch<SetStateAction<boolean>>
}

const Menu: FC<IMenuProps> = ({
    stats,
    setIsGame,
}) => {
    return (
        <div className='menu'>
            {
                stats && (
                    <div className='menu-stats_box'>
                        <h1>прошлый результат:</h1>
                        <div className='menu-stats'>
                            <p>очки: <em>{stats?.score}</em></p>
                            <p>ошибки: <em>{stats?.errors}</em></p>
                        </div>
                    </div>
                )
            }
            <button className='menu-play_button'
                onClick={() => setIsGame(true)}
            >
                начать
            </button>
        </div>
    )
}

export default Menu
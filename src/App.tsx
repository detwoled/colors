import { 
  useState,
  useEffect,
  FC,
} from "react";

import Details from "components/details/details.component";
import Game from "components/game/game.component";
import Menu from "components/menu/menu.component";

import { IStats } from 'interfaces/stats.interface'

const App: FC =() => {
  const [isGame, setIsGame] = useState<boolean>(false)
  const [stats, setStats] = useState<IStats| null>(null)

  useEffect(() => {
    if (!isGame) {
        const score = localStorage.getItem('score')
        const errors = localStorage.getItem('errors')

        if(score && errors) {
          return setStats({
            score,
            errors,
          })
        }
    }

    setStats(null)
  }, [isGame])

  return (
    <div className="container">
      <div className="wrapper">
        <Details/>
        {
          (isGame && (
            <Game
              setIsGame={setIsGame}
            />
          )) || (
            <Menu
              stats={stats}
              setIsGame={setIsGame}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;

import { FC, useEffect, useState } from "react";

import { generateCells } from "utils/helpers.util";

import './d.scss'

const App: FC =() => {
  const [cells, setCells] = useState<string[]>([])


  useEffect(() => {
    // generateCells(81)
    setCells(generateCells(16))
  }, [])
  return (
    <div className="container">
      <div className="wrapper">
        <li className="cells-box">
          {
            cells.map((color, key) => (
              <ul className="cell" 
                key={key}
                style={{backgroundColor: `rgb(${color})`}}
              />
            ))
          }
        </li>
      </div>
    </div>
  );
}

export default App;

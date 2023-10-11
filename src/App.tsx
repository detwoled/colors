import { FC, useEffect, useState } from "react";

import './d.scss'

const App: FC =() => {
  const [cells, setCells] = useState<string[]>([])

  const getRandNum = (value: number): number => Math.floor(Math.random() * value)
  const getRandffset = (num: number, diff: number = 15): number => {
    const max = Math.min(num + diff, 255)
    const min = Math.max(num - diff, 0)
    console.log({min, max})
    const offest = getRandNum(max - min) + min
    // const offest = max 
    return offest 
  }

  const generateCells = (count: number): string[] => {
    const diff = 10
    const maxValue = 256

    const colorArr = Array.from({length: 3}, () => getRandNum(maxValue))
    const simularColorArr = Array.from(colorArr, i => getRandffset(i, diff))

    const color = colorArr.toString() 
    const simularColor = simularColorArr.toString() 

    const cells = Array.from({length: count}, () => color)
    cells[getRandNum(count)] = simularColor
    console.log(colorArr,simularColorArr)
    console.log(cells)
    return cells
    // const simularColorArr = Array.from({length: 3}, () => getRandNum(256))
    // const simularColorArr
    // setCells([color])
    // console.log(color)

    // const colors = []
    // const delta = 30
    // for i in range(loop):
    //     const new_rgb = randint(max(0, x - delta), min(x + delta, 255))  
    //     colors.push(new_rgb)                
    // // return colors
    
  }

  useEffect(() => {
    // generateCells(81)
    setCells(generateCells(25))
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

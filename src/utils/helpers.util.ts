
export const getRandNum = (value: number): number => Math.floor(Math.random() * value)
export const getRandffset = (num: number, diff: number = 15, min: number = 0, max: number = 256): number => {
  const maxValue = Math.min(num + diff, max)
  const minValue = Math.max(num - diff, min)

  const offest = getRandNum(maxValue - minValue) + minValue

  return offest 
}

export const generateCells = (count: number): string[] => {
  const diff = 10
  const min= 100
  const max = 200

  const colorArr = Array.from({length: 3}, () => getRandNum(max - min) + min)
  const simularColorArr = Array.from(colorArr, i => getRandffset(i, diff, min, max))
  const color = colorArr.toString() 
  const simularColor = simularColorArr.toString() 

  const cells = Array.from({length: count}, (i,d) => color)
  cells[getRandNum(count)] = simularColor
  console.log(colorArr,simularColorArr)
  console.log(cells)
  
  return cells
  
}
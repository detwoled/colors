interface IGenerateCells {
  cells: string[]
  similar: string
}

export const getRandNum = (value: number): number => Math.floor(Math.random() * value)
export const getRandffset = (num: number, diff: number = 15, min: number = 0, max: number = 256): number => {
  const maxValue = Math.min(num + diff, max)
  const minValue = Math.max(num - diff, min)

  const offest = getRandNum(maxValue - minValue) + minValue

  return offest 
}

export const generateCells = (count: number): IGenerateCells => {
  const diff = 15
  const min= 100
  const max = 200

  const colorArr = Array.from({length: 3}, () => getRandNum(max - min) + min)
  const similarArr = Array.from(colorArr, i => getRandffset(i, diff, min, max))
  
  const color = colorArr.toString() 
  const similar = similarArr.toString() 

  const cells = Array.from({length: count}, () => color)
  cells[getRandNum(count)] = similar
  
  return {cells, similar}
  
}
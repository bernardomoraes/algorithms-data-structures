const exploreLand = (
  grid: number[][],
  x: number,
  y: number,
  currLenght = 0
): number => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] !== 1) {
    return currLenght;
  }

  currLenght++;
  grid[x][y] = -1;
  const directions = [
    [0, 1], // down
    [0, -1], // up
    [1, 0], // right
    [-1, 0], // left
  ];

  directions.forEach((direction) => {
    currLenght = exploreLand(
      grid,
      x + direction[0],
      y + direction[1],
      currLenght
    );
  });

  return currLenght;
};

export default function maxAreaOfIsland(grid: number[][]): number {
  let biggestLandlength = 0;
  for (let ri = 0; ri < grid.length; ri++) {
    for (let ci = 0; ci < grid[ri].length; ci++) {
      if (grid[ri][ci] === 1) {
        const landLength = exploreLand(grid, ri, ci);
        if (landLength > biggestLandlength) {
          biggestLandlength = landLength;
        }
      }
    }
  }

  return biggestLandlength;
}

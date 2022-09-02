const exploreIsland = (grid, y, x) => {
  if (grid[x] === undefined || grid[x][y] === undefined) return false;
  if (grid[x][y] === -1 || grid[x][y] === 1) return true;
  const directions = [
    [0, 1], // down
    [0, -1], // up
    [1, 0], // right
    [-1, 0], // left
  ];
  grid[x][y] = -1;
  let isClosedIsland = true;
  // verificar se esse forEach é performático
  directions.forEach((direction) => {
    if (!exploreIsland(grid, y + direction[0], x + direction[1])) {
      isClosedIsland = false;
    }
  });

  return isClosedIsland;
};

function closedIsland(grid: number[][]): number {
  let numberOfClosedIslands = 0;
  for (let ri = 0; ri < grid.length; ri++) {
    for (let ci = 0; ci < grid[ri].length; ci++) {
      if (grid[ri][ci] === 0 && exploreIsland(grid, ci, ri)) {
        numberOfClosedIslands++;
      }
    }
  }

  return numberOfClosedIslands;
}

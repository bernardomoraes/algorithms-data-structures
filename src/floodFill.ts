const floodFill = function (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const currColor = image[sr][sc];
  if (currColor === newColor) return image;
  const queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (image[row][col] === currColor) {
      image[row][col] = newColor;
      if (row - 1 >= 0) queue.push([row - 1, col]); // up
      if (row + 1 < image.length) queue.push([row + 1, col]); // down
      if (col + 1 < image[0].length) queue.push([row, col + 1]); // right
      if (col - 1 >= 0) queue.push([row, col - 1]); // left
    }
  }
  return image;
};

export default floodFill;

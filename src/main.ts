export type Matrix = (number | string)[][];
export type ParticleAccelerator = (matrix: Matrix) => Matrix;

export const generateCyclotron = (n: number): number[][] => {
  return Array.from({ length: n }, () => Array.from({ length: n }, () => 1));
};

export const modifyArrX = (particle: string, arr: Matrix, row: number) => {
  const modifyRow = (row: number) => {
    for (const i in arr[row]) {
      arr[row][i] = particle;
    }
  };

  if (arr[row] === undefined) throw new Error('Row not found');
  modifyRow(row);

  return arr;
};

export const modifyArrY = (particle: string, arr: Matrix, col: number) => {
  const modifyCol = (col: number) => {
    for (const i in arr) {
      if (arr[i][col] === undefined) throw new Error('Column not found');

      arr[i][col] = particle;
    }
  };

  modifyCol(col);

  return arr;
};

export const accelerateEletron: ParticleAccelerator = (matrix: Matrix) => {
  const particle = 'e';

  modifyArrX(particle, matrix, 0);
  modifyArrY(particle, matrix, matrix.length - 1);

  return matrix;
};

export const accelerateNeutron: ParticleAccelerator = (matrix: Matrix) => {
  const particle = 'n';

  modifyArrX(particle, matrix, 0);

  return matrix;
};

export const accelerateProton: ParticleAccelerator = (matrix: Matrix) => {
  const makeArrow = (matrix: Matrix) => {
    /* down side */
    matrix[matrix.length - 1][matrix.length - 2] = 1;

    /* right side */
    matrix[matrix.length - 2][matrix.length - 1] = 1;

    /* pointer */
    matrix[matrix.length - 2][matrix.length - 2] = 'p';
  };

  const particle = 'p';

  modifyArrX(particle, matrix, 0);
  modifyArrX(particle, matrix, matrix.length - 1);

  modifyArrY(particle, matrix, 0);
  modifyArrY(particle, matrix, matrix.length - 1);

  makeArrow(matrix);

  return matrix;
};

export const accelerateCyclotron = (particle: string, matrix: Matrix) => {
  const particles: Record<string, ParticleAccelerator> = {
    e: accelerateEletron,
    n: accelerateNeutron,
    p: accelerateProton,
  };

  if (particles[particle] === undefined) throw new Error('Invalid particle');

  return particles[particle](matrix);
};

export const printMatrix = (matrix: Matrix) => {
  console.log(matrix.map((row) => row.join(' ')).join('\n'), '\n');
};

const main = () => {
  const matrix = generateCyclotron(3);

  printMatrix(accelerateCyclotron('p', matrix));
};

main();

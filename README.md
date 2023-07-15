## Introduction

This repository provides an algorithm to simulate the circulation of particles within a cyclotron. The algorithm is designed to handle different types of particles, including electrons, protons, and neutrons. The algorithm can create both closed and open cycles for each particle type.

## Usage

To check the algorithm, follow the instructions below:

1. Clone the repository:

   ```bash
   git clone https://github.com/gabrielh-silvestre/ll-cyclotron-algorithm
   ```

2. Navigate to the repository directory:

   ```bash
   cd ll-cyclotron-algorithm
   ```

3. Include the algorithm in your project:

   ```ts
   // Example usage for accelerating an electron

   const matrix = [
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
   ];

   const result = accelerateCyclotron('e', matrix);

   printMatrix(result);
   ```

4. Customize the input matrix based on the particle and desired acceleration.

## Supported Particle Types

The algorithm supports the following particle types:

1. Electron (e): Represents an electron within the cyclotron.
2. Proton (p): Represents a proton within the cyclotron.
3. Neutron (n): Represents a neutron within the cyclotron.

## Input Format

The `accelerateCyclotron` function takes two parameters: the particle type and the matrix representing the cyclotron.

```ts
accelerateCyclotron(particle, matrix);
```

- `particle` (str): Specifies the particle type. Valid options are "e" for electron, "p" for proton, and "n" for neutron.
- `matrix` (list of lists): Represents the initial state of the cyclotron. Each element in the matrix can be either 1 (empty space) or the particle type.

## Output Format

The `accelerateCyclotron` function returns the updated matrix representing the cyclotron after applying the particle's circulation.

## Examples

Below are some examples of how to use the `accelerateCyclotron` function:

1. Accelerating an electron:

   ```ts
   const matrix = [
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
   ];

   const result = accelerateCyclotron('e', matrix);

   printMatrix(result);

   /*
    e, e, e, e
    1, 1, 1, e
    1, 1, 1, e
    1, 1, 1, e
    */
   ```

2. Accelerating a proton:

   ```ts
   const matrix = [
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
   ];

   const result = accelerateCyclotron('e', matrix);

   printMatrix(result);
   /*
    p, p, p, p
    p, 1, 1, p
    p, 1, p, 1
    p, p, 1, p
    */
   ```

3. Accelerating a neutron:

   ```ts
   const matrix = [
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
   ];

   const result = accelerateCyclotron('e', matrix);

   printMatrix(result);

   /*
    n, n, n, n
    1, 1, 1, 1
    1, 1, 1, 1
    1, 1, 1, 1
    */
   ```

## Performance Considerations

The algorithm is designed to handle matrices of different sizes, ranging from 4x4 to NxN. It has been optimized for efficiency and takes advantage of good practices in data structure, functions, and algorithm design.

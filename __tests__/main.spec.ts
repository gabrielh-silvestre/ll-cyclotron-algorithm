import {
  accelerateCyclotron,
  accelerateEletron,
  accelerateNeutron,
  accelerateProton,
  generateCyclotron,
  modifyArrX,
  modifyArrY,
} from '../src/main';

describe('Cyclotron Algorithm', () => {
  describe('Unit tests', () => {
    it('should generate a 3x3 Cyclotron matrix', () => {
      const expectedMatrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const result = generateCyclotron(3);

      expect(result.length).toBe(3);
      expect(result[0].length).toBe(3);
      expect(result).toEqual(expectedMatrix);
    });

    it('should modify the first matrix row', () => {
      const originalMatrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
      const expectedMatrix = [
        ['x', 'x', 'x'],
        [1, 1, 1],
        [1, 1, 1],
      ];

      modifyArrX('x', originalMatrix, 0);

      expect(originalMatrix).toEqual(expectedMatrix);
    });

    it('should throw an error when row is not found', () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const act = () => modifyArrX('x', matrix, 3);

      expect(act).toThrowError('Row not found');
    });

    it('should modify the first matrix column', () => {
      const originalMatrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
      const expectedMatrix = [
        ['x', 1, 1],
        ['x', 1, 1],
        ['x', 1, 1],
      ];

      modifyArrY('x', originalMatrix, 0);

      expect(originalMatrix).toEqual(expectedMatrix);
    });

    it('should throw an error when column is not found', () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const act = () => modifyArrY('x', matrix, 3);

      expect(act).toThrowError('Column not found');
    });
  });

  describe('Integration tests', () => {
    const expectedEletronMatrix = [
      ['e', 'e', 'e'],
      [1, 1, 'e'],
      [1, 1, 'e'],
    ];
    const expectedNeutronMatrix = [
      ['n', 'n', 'n'],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const expectedProtonMatrix = [
      ['p', 'p', 'p'],
      ['p', 'p', 1],
      ['p', 1, 'p'],
    ];

    it('should accelerate an electron', () => {
      const result = accelerateEletron(generateCyclotron(3));

      expect(result).toEqual(expectedEletronMatrix);
    });

    it('should accelerate a neutron', () => {
      const result = accelerateNeutron(generateCyclotron(3));

      expect(result).toEqual(expectedNeutronMatrix);
    });

    it('should accelerate a proton', () => {
      const result = accelerateProton(generateCyclotron(3));

      expect(result).toEqual(expectedProtonMatrix);
    });

    it.each([
      ['eletron', 'e', expectedEletronMatrix],
      ['neutron', 'n', expectedNeutronMatrix],
      ['proton', 'p', expectedProtonMatrix],
    ])(
      'should accelerate a %s in the Cyclotron',
      (_, particle, expectedMatrix) => {
        const result = accelerateCyclotron(particle, generateCyclotron(3));

        expect(result).toEqual(expectedMatrix);
      }
    );

    it('should throw an error when particle is invalid', () => {
      const act = () => accelerateCyclotron('x', generateCyclotron(3));

      expect(act).toThrowError('Invalid particle');
    });
  });
});

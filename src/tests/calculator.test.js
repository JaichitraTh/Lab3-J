const { calculator, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Operations', () => {
  
  // Basic Operations Tests
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator(5, '+', 3)).toBe(8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator(10, '+', -5)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator(-5, '+', -3)).toBe(-8);
    });

    test('should add zero', () => {
      expect(calculator(5, '+', 0)).toBe(5);
    });

    test('should handle decimals', () => {
      expect(calculator(5.5, '+', 2.5)).toBe(8);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator(10, '-', 3)).toBe(7);
    });

    test('should subtract resulting in negative', () => {
      expect(calculator(5, '-', 10)).toBe(-5);
    });

    test('should subtract with decimals', () => {
      expect(calculator(10.5, '-', 2.5)).toBe(8);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator(4, '*', 5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(calculator(5, '*', 0)).toBe(0);
    });

    test('should multiply positive and negative', () => {
      expect(calculator(5, '*', -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator(-4, '*', -5)).toBe(20);
    });

    test('should multiply decimals', () => {
      expect(calculator(2.5, '*', 4)).toBe(10);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator(20, '/', 4)).toBe(5);
    });

    test('should divide resulting in decimal', () => {
      expect(calculator(10, '/', 4)).toBe(2.5);
    });

    test('should divide positive and negative', () => {
      expect(calculator(20, '/', -4)).toBe(-5);
    });

    test('should divide by one', () => {
      expect(calculator(5, '/', 1)).toBe(5);
    });
  });

  // New Operations Tests
  describe('Modulo', () => {
    test('should return remainder: 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should return remainder: 10 % 3', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return 0 for even division', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should work with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should work with decimals', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });
  });

  describe('Power (Exponentiation)', () => {
    test('should raise to power: 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise to power: 5 ^ 2', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should handle zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -3)).toBe(0.125);
    });

    test('should handle base of zero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-3, 2)).toBe(9);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-3, 3)).toBe(-27);
    });

    test('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large powers', () => {
      expect(power(2, 10)).toBe(1024);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root: √16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of 2', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimal', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-9)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for -1', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  // Integration Tests with Calculator Function
  describe('Calculator Integration Tests', () => {
    test('should handle modulo operation through calculator', () => {
      expect(calculator(10, '%', 3)).toBe(1);
    });

    test('should handle power operation through calculator', () => {
      expect(calculator(2, '^', 8)).toBe(256);
    });

    test('should handle square root operation through calculator', () => {
      expect(calculator(16, 'sqrt', 0)).toBe(4);
    });

    test('should throw error for modulo with zero divisor', () => {
      expect(() => calculator(10, '%', 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should throw error for square root of negative number', () => {
      expect(() => calculator(-9, 'sqrt', 0)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    test('should handle very large numbers in power', () => {
      expect(power(10, 5)).toBe(100000);
    });

    test('should handle very small numbers in square root', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('should handle string inputs by converting to numbers', () => {
      expect(calculator('10', '+', '5')).toBe(15);
    });

    test('should handle modulo with larger divisor than dividend', () => {
      expect(modulo(3, 10)).toBe(3);
    });

    test('should return correct result for power of 1', () => {
      expect(power(100, 1)).toBe(100);
    });
  });
});

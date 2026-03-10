#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers together
 * - Subtraction (-): Subtract one number from another
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide one number by another
 * - Modulo (%): Returns the remainder of division
 * - Exponentiation (^): Raises base to the power of exponent
 * - Square Root (sqrt): Returns the square root of a number
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculator(num1, operation, num2) {
  // Convert inputs to numbers
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  // Validate inputs
  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  let result;

  switch (operation) {
    // Addition: Add two numbers
    case '+':
      result = a + b;
      break;

    // Subtraction: Subtract one number from another
    case '-':
      result = a - b;
      break;

    // Multiplication: Multiply two numbers
    case '*':
      result = a * b;
      break;

    // Division: Divide one number by another
    case '/':
      if (b === 0) {
        console.error('Error: Cannot divide by zero');
        process.exit(1);
      }
      result = a / b;
      break;

    // Modulo: Return remainder of division
    case '%':
      result = modulo(a, b);
      break;

    // Exponentiation: Raise base to power
    case '^':
      result = power(a, b);
      break;

    // Square Root: Return square root of number
    case 'sqrt':
      result = squareRoot(a);
      break;

    default:
      console.error(`Error: Invalid operation '${operation}'. Supported operations: +, -, *, /, %, ^, sqrt`);
      process.exit(1);
  }

  return result;
}

// Get command-line arguments
const args = process.argv.slice(2);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculator, modulo, power, squareRoot };
}

// Execute calculation only if this script is run directly
if (require.main === module) {
  // Validate argument count
  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operation> <number2>');
    console.error('Operations: +, -, *, /, %, ^, sqrt');
    console.error('Example: node calculator.js 10 + 5');
    process.exit(1);
  }

  try {
    const [num1, operation, num2] = args;
    const result = calculator(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

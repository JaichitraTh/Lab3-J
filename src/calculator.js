#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers together
 * - Subtraction (-): Subtract one number from another
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide one number by another
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

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

    default:
      console.error(`Error: Invalid operation '${operation}'. Supported operations: +, -, *, /`);
      process.exit(1);
  }

  return result;
}

// Get command-line arguments
const args = process.argv.slice(2);

// Validate argument count
if (args.length !== 3) {
  console.error('Usage: node calculator.js <number1> <operation> <number2>');
  console.error('Operations: +, -, *, /');
  console.error('Example: node calculator.js 10 + 5');
  process.exit(1);
}

// Execute calculation
const [num1, operation, num2] = args;
const result = calculator(num1, operation, num2);

console.log(`${num1} ${operation} ${num2} = ${result}`);

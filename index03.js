function isPrime(number) {
    let countDivisors = 0;

    for (i = 1; i <= number; i++) {
      if (number % i === 0) {
        countDivisors++;
      }
    }

    if (countDivisors === 2) {
      console.log(`${number} é um número primo.`);
    } else {
      console.log(`${number} não é um número primo.`);
    }
}

const prompt = require('prompt-sync')();
const number = Number(prompt('Digite um número para verificar se é primo: '));

isPrime(number);

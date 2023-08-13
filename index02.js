const prompt = require('prompt-sync')();

function isEvenOrOdd(number) {
    const integerNumber = parseInt(number);

    if (integerNumber % 2 === 0) {
        console.log(`${integerNumber} is Even`);
    } else {
        console.log(`${integerNumber} is Odd`);
    }
}

const number = prompt(`Digite um número inteiro: `);

isEvenOrOdd(number);

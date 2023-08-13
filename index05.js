function isPerfectNumber(number) {
  let sumOfFactors = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sumOfFactors += i + number / i;
    }
  }
  return sumOfFactors === number;
}

console.log(isPerfectNumber(6));

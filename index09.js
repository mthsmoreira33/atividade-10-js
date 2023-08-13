function calculateMean(grade1, grade2, grade3, name) {
    const mean = (grade1 + grade2 + grade3) / 3;
    console.log(`A média de ${name} é ${mean.toFixed(2)}`);
    console.log(`Nota 1: ${grade1}, Nota 2: ${grade2}, Nota 3: ${grade3}`);
}

calculateMean(10, 10, 8, "João");

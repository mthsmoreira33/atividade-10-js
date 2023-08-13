const prompt = require("prompt-sync")();

function calculateGrades(grade1, grade2, grade3, meanType) {
  switch (meanType.toLowerCase()) {

    case "a":
      const mediaAritmetica = (grade1 + grade2 + grade3) / 3;
      console.log(`Média Aritmética: ${mediaAritmetica}`);
      break;

    case "p":
      const mediaPonderada =
        ((grade1 * 5) + (grade2 * 3) + (grade3 * 2)) / (5 + 3 + 2);
      console.log(`Média Ponderada: ${mediaPonderada}`);
      break;

    default:
      console.log(
        `Opção inválida, digite [a](Média Aritmética) ou [p](Média Ponderada)`
      );
      break;
  }
}

const grade1 = prompt("Digite a primeira nota: ");
const grade2 = prompt("Digite a segunda nota: ");
const grade3 = prompt("Digite a terceira nota: ");
const meanType = prompt(
  "Digite que tipo de média deseja: \n [a] Média Aritmética \n [p] Média Ponderada \n"
);

calculateGrades(+grade1, +grade2, +grade3, meanType);

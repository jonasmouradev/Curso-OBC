const num1 = prompt("Digite um valor: ");
const num2 = prompt("Digite outro valor: ");

const x = parseFloat(num1);
const y = parseFloat(num2);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "Soma dos valores: " +
    soma +
    "\nSubtração: " +
    subtração +
    "\nMultiplicação: " +
    multiplicação +
    "\nDivisão: " +
    divisão
);

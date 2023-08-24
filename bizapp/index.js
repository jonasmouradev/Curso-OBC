//JavaScript

const numeroUm = parseFloat(prompt("Digite um número:"));
const numeroDois = parseFloat(prompt("Digite outro número:"));
const operadorMatematico = prompt("Agora digite um operador matemático:");

const soma = numeroUm + numeroDois;
const subtração = numeroUm - numeroDois;
const multiplicação = numeroUm * numeroDois;
const divisão = numeroUm / numeroDois;

if (isNaN(numeroUm) || isNaN(numeroDois)) {
  alert("Digite um número válido.");
} else {
  switch (operadorMatematico) {
    case "+":
      alert(numeroUm + " + " + numeroDois + " = " + soma);
      break;
    case "-":
      alert(numeroUm + " - " + numeroDois + " = " + subtração);
      break;
    case "*":
      alert(numeroUm + " * " + numeroDois + " = " + multiplicação);
      break;
    case "/":
      alert(numeroUm + " / " + numeroDois + " = " + divisão);
      break;

    default:
      alert("Operação inválida.");
  }
}

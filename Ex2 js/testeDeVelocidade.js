const veiculo1 = prompt("Informe o nome do primeiro veículo:");
const velocidade1 = parseFloat(prompt("Qual a velocidade dele?"));
const veiculo2 = prompt("Informe o nome do segundo veículo:");
const velocidade2 = parseFloat(prompt("Qual a velocidade dele?"));

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1);
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem a mesma velocidade");
}

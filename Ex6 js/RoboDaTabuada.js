const numero = prompt("Digite um número para calcular a tabuada:");
let tabuada = [];

for (let i = 1; i <= 20; i++) {
  tabuada.push(numero * i);
}
alert("Tabuada do " + numero + ":\n\n" + tabuada.join(", "));

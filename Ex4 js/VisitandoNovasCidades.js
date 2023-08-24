const nomeTurista = prompt("Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você já visitou alguma cidade?");

while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  contagem++;
  cidades += " - " + cidade + "\n";
  continuar = prompt("Você já visitou outra cidade?");
}
alert(
  "Cidades visitadas:\n" +
    cidades +
    "\nQuantidade de cidades visitadas: " +
    contagem
);

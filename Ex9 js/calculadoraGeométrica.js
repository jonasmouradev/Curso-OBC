function exibirMenu() {
  return prompt(
    "Qual forma geométrica deseja calcular a área?\n\n1. Triângulo\n2. Retângulo\n3. Quadrado\n4. Trapézio\n5. Círculo\n6. Sair"
  );
}
function areaTriangulo() {
  const base = prompt("Digite a base do triângulo:");
  const altura = prompt("Digite a altura do triângulo");
  return (base * altura) / 2;
}
function areaRetangulo() {
  const base = prompt("Digite a base do triângulo:");
  const altura = prompt("Digite a altura do triângulo");
  return base * altura;
}
function areaQuadrado() {
  const lado = prompt("Digite a medida do lado");
  return lado * lado;
}
function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Digite a medida da base maior"));
  const baseMenor = parseFloat(prompt("Digite a medida da base menor"));
  const altura = prompt("Digite a altura do trapézio");
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaCirculo() {
  const raio = prompt("Digite o raio do círculo");
  return 3.14 * raio * raio;
}
function executar() {
  let opção = "";

  do {
    opção = exibirMenu();
    let resultado;

    switch (opção) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida.");
        break;
    }
    if (resultado) {
      alert("O resultado é: " + resultado);
    }
  } while (opção !== "6");
}

executar();

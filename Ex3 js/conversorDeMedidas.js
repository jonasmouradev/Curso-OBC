const metros = parseFloat(prompt("Digite um valor em metros: "));
const conversão = prompt(
  "Para qual unidade de medida você quer converter:" +
    "\n1. milímetros" +
    "\n2. centímetros" +
    "\n3. decímetros" +
    "\n4. decâmetros" +
    "\n5. hectômetros" +
    "\n6. quilômetros"
);

switch (conversão) {
  case "1":
    alert("Medida convertida para milímetros (mm): " + metros * 1000);
    break;
  case "2":
    alert("Medida convertida para centímetros (cm): " + metros * 100);
    break;
  case "3":
    alert("Medida convertida para decímetro (dm): " + metros * 10);
    break;
  case "4":
    alert("Medida convertida para decâmetro (dam): " + metros / 10);
    break;
  case "5":
    alert("Medida convertida para hectômetro (hm): " + metros / 100);
    break;
  case "6":
    alert("Medida convertida para quilômetro (km): " + metros / 1000);
    break;
  default:
    alert("Opção Inválida...");
}

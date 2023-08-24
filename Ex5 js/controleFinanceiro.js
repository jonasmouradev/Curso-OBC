let saldo = parseFloat(prompt("Quantidade de dinheiro disponível: "));
let opção = "";
do {
  opção = prompt(
    "Saldo R$: " +
      saldo +
      "\nO que vc quer fazer?" +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );
  switch (opção) {
    case "1":
      saldo += parseFloat(prompt("Quanto você quer adicionar?"));
      alert("Novo saldo: R$" + saldo);
      break;
    case "2":
      saldo -= parseFloat(prompt("Quanto você quer remover?"));
      alert("Novo saldo: R$" + saldo);
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opção !== "3");

do {
  escolha = prompt(
    "Escolha uma opção:" + "\n1. A \n2. B \n3. C \n4. D \n5. Encerrar"
  );

  switch (escolha) {
    case "1":
      alert("Você escolheu a opção 1.");
      break;
    case "2":
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      alert("Você escolheu encerrar.");
      break;
    default:
      alert("Opção inválida.");
  }
} while (escolha !== "5");

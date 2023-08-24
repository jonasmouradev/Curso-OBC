const imoveis = [];
let menu = "";
do {
  menu = prompt(
    "Bem-vindo ao Cadastro de Imóveis!\n" +
      "Imóveis cadastrados: " +
      imoveis.length +
      "\n\n1. Cadastrar um imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {};
      imovel.prop = prompt("Propietário:");
      imovel.quarto = prompt("Quantos quartos possui?");
      imovel.banheiro = prompt("Quantos banheiros possui?");
      imovel.garagem = prompt("A casa possui garagem?");
      const confirmação = confirm(
        "Deseja confirmar o cadastro?\n" +
          "\nProprietário: " +
          imovel.prop +
          "\nQuartos: " +
          imovel.quarto +
          "\nBanheiros: " +
          imovel.banheiro +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmação) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\n\nProprietário: " +
            imoveis[i].prop +
            "\nQuartos: " +
            imoveis[i].quarto +
            "\nBanheiros: " +
            imoveis[i].banheiro +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (menu !== "3");

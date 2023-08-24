const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome, x candidatos
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const descrição = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga:"
  );

  const confirmação = confirm(
    "Deseja criar uma vaga com essas informações?\n" +
      "\nNome: " +
      nome +
      "\nDescrição: " +
      descrição +
      "\nData limite: " +
      dataLimite
  );

  if (confirmação) {
    const novaVaga = { nome, descrição, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido");
    return;
  }
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a):");
  const indice = prompt(
    "Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever"
  );
  const vaga = vagas[indice];

  const confirmação = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmação) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada.");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmação = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData Limite: " +
      vaga.dataLimite +
      "?"
  );

  if (confirmação) {
    //exclui elementos específicos de um array (e se quiser, substitui por outros)
    vaga.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opção = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções:" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Insrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opção;
}

function executar() {
  let opção = "";

  do {
    opção = exibirMenu();

    switch (opção) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opção !== "6");
}

executar();

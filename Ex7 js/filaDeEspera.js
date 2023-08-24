let listaDePacientes = [];

do {
  menu = prompt(
    "Lista de Espera:\n" +
      listaDePacientes.join(", ") +
      "\n\nO que você quer fazer?\n\n1. Novo Paciente\n2. Consultar paciente\n3. Sair"
  );

  switch (menu) {
    case "1":
      let paciente = prompt("Qual o nome do paciente?");
      listaDePacientes.push(paciente);
      break;
    case "2":
      const pacienteConsultado = listaDePacientes.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila de espera.");
      } else {
        alert("Não há pacientes na fila.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção Inválida.");
  }
} while (menu !== "3");

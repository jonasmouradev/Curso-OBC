const nome = prompt("Insira seu nome:");
const sobrenome = prompt("Insira seu Sobrenome");
const campoDeEstudo = prompt("Qual seu campo de estudo?");
const anoDeNascimento = prompt("Digite seu ano de nascimento");
alert(
  "Cadastrado com sucesso!\n" +
    "\nNome Completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de Estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - anoDeNascimento)
);

const palavra = prompt("Digite uma palavra:");
contrario = [];

for (let i = palavra.length - 1; i >= 0; i--) {
  contrario += palavra.toUpperCase()[i];
}
if (palavra.toUpperCase() === contrario) {
  alert(palavra.toUpperCase() + " é um palíndromo!");
} else {
  alert(
    palavra.toUpperCase() +
      " não é um palíndromo!\n" +
      palavra.toUpperCase() +
      " !== " +
      contrario
  );
}

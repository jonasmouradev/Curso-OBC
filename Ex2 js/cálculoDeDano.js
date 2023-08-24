const nomePersonagem = prompt("Insira o nome do personagem atacante:");
const poderDeAtaque = parseFloat(prompt("Insira o poder de ataque dele:"));

const nomePersonagem2 = prompt("Insira o nome do personagem defensor:");
let vida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const defesa = parseFloat(
  prompt("Insira quantos pontos de defesa o personagem 2 possui:")
);
const escudo = prompt("Ele possui escudo?(Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > defesa && escudo === "Não") {
  danoCausado = poderDeAtaque - defesa;
  vida -= danoCausado;
  alert(
    nomePersonagem +
      " causou " +
      danoCausado +
      " pontos de dano em " +
      nomePersonagem2
  );
} else if (poderDeAtaque > defesa && escudo === "Sim") {
  danoCausado = (poderDeAtaque - defesa) / 2;
  vida -= danoCausado;
  alert(
    nomePersonagem +
      " causou " +
      danoCausado +
      " pontos de dano em " +
      nomePersonagem2
  );
} else {
  alert("O alvo não sofreu dano.");
}

alert(
  nomePersonagem +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    nomePersonagem2 +
    "\nVida: " +
    vida +
    "(-" +
    danoCausado +
    ")" +
    "\nDefesa: " +
    defesa +
    "\nEscudo: " +
    escudo
);

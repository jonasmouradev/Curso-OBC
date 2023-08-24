function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    `Escalar ${name} (${number}) na posição ${position}?`
  );

  if (confirmation) {
    const escalacao = document.getElementById("escalacao");
    const player = document.createElement("li");
    player.id = `jogador ${number}`;
    player.innerText = `${position}: ${name} (${number})`;
    escalacao.appendChild(player);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}
function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(`jogador ${number}`);

  const confirmation = confirm(
    `remover o jogador ${playerToRemove.innertext} ?`
  );
  if (confirmation) {
    //document.getElementById("escalacao").removeChild(playerToRemove);
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}

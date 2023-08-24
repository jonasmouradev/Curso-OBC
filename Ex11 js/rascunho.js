function addPlayer() {
  const playerSection = document.getElementById("form");

  const h3 = document.createElement("h3");
  h3.innerText = "Jogador";

  const ul = document.createElement("ul");

  const positionLi = document.createElement("li");
  positionLi.innerText = "Posição: ";

  const positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.name = "name";
  positionLi.appendChild(positionInput);
  ul.appendChild(positionLi);

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const numCamisaLi = document.createElement("li");
  numCamisaLi.innerText = "Camisa: ";

  const numCamisaInput = document.createElement("input");
  numCamisaInput.type = "text";
  numCamisaInput.name = "number";
  numCamisaLi.appendChild(numCamisaInput);
  ul.appendChild(numCamisaLi);
  ul.appendChild(document.createElement("br"));

  playerSection.append(h3, ul);
}
function removePlayer() {
  const playerSection = document.getElementById("form");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  playerSection.removeChild(titles[titles.length - 1]);
  playerSection.removeChild(contacts[contacts.length - 1]);
}

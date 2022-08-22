const players = [];
let numberOfPlayer = 0;

function displayList() {
  const displayPlayers = document.getElementById("display-players");
  displayPlayers.textContent = "";
  
  for (let i = 0; i < players.length; i++) {
    if (i > 4) {
      alert("Maximum added exceeded");
      return;
    }
    numberOfPlayer = i + 1;

    const selectedPlayers = document.getElementById("selected-players");
    selectedPlayers.innerText = numberOfPlayer + 1;

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${players[i]}</td>
        `;

    displayPlayers.appendChild(tr);
  }
}
function addToList(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  players.push(playerName);
  displayList();
}

function getInputFieldValueById(elementId) {
  const inputFieldElement = document.getElementById(elementId);
  const inputFieldValueStr = inputFieldElement.value;
  const inputFieldValue = parseInt(inputFieldValueStr);
  return inputFieldValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerExpence = getInputFieldValueById("per-player-expence");

  const expencesAsPlayerNum = perPlayerExpence * numberOfPlayer;

  const playerExpences = document.getElementById("player-expences");
  playerExpences.innerText = expencesAsPlayerNum;
});

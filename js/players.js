const players = [];

function displayList(){
    const displayPlayers = document.getElementById('display-players');
    displayPlayers.textContent = '';
    for(let i = 0; i < players.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}.</th>
        <td>${players[i]}</td>
        `;
        displayPlayers.appendChild(tr);
    }
}
function addToList(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    players.push(playerName);
    displayList();
}


const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector("body > div.grid-board > div.status");
const restartButton = document.getElementById('restart');


let currentPlayer = 'X';
let gameState = ["","","","","","","","",""];
let gameActive = true;

let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [2,4,6],
    [1,4,7],
    [2,5,8]
];

const handleCellClick = (e) => {
    console.log("clicked")
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const checkResult = () => {
    let won = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a,b,c] = winningConditions[i];
        if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
            continue;
        }

        if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
            won = true;
        }

        if (won) {
            statusText.textContent = `${currentPlayer} wins`
            gameActive = false
            break;
        }

        if (!gameState.includes("")) {
            statusText.textContent = 'draw'
            gameActive = false
            return
        }

        statusText.textContent = `${currentPlayer} playing`;
    }
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));

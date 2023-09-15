const ticTacToeGame = () => {
  const playerX = "X";
  const playerO = "O";
  let currentPlayer = playerX;
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;
  const winnerSection = document.getElementById("winner-Toast");

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }

    if (!gameBoard.includes("")) {
      gameActive = false;
      return "draw";
    }

    return null;
  };

  const updateCell = (index) => {
    const cell = cells[index];
    if (gameBoard[index] === "" && gameActive) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;

      const winner = checkWin();
      console.log(winner);
      if (winner) {
        if (winner === playerX) {
          winnerSection.style.display = "block";
          let playerXScore = document.getElementById("player1-Score");
          let playerXWin = document.getElementById("wintitle");
          playerXScore.textContent = parseInt(playerXScore.textContent) + 1;
          playerXWin.textContent = "Player X Win";
        } else if (winner === playerO) {
          winnerSection.style.display = "block";
          let player0Win = document.getElementById("wintitle");
          let player0Score = document.getElementById("player2-Score");
          player0Score.textContent = parseInt(player0Score.textContent) + 1;
          player0Win.textContent = "Player O Win";
        }
      } else {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
      }
    }
  };

  const resetBoard = () => {
    winnerSection.style.display = "none";
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i] = "";
      cells[i].textContent = "";
    }
    currentPlayer = playerX;
    gameActive = true;
  };

  return {
    gameBoard,
    updateCell,
    resetBoard,
    checkWin,
  };
};

// Initialize the game
const game = ticTacToeGame();

// Select all elements with class "cells" using querySelectorAll
const cells = document.querySelectorAll(".cells");
cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    if (game.checkWin() === null) {
      game.updateCell(i);
      console.log("clicked");
    }
  });
});

const resetBtn = document.getElementById("play-again");
const winnerTxt = document.getElementById("wintitle");
resetBtn.addEventListener("click", () => {
  cells.forEach((cell, i) => {
    game.resetBoard();
  });
});

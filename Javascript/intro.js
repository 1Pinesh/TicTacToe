const player1Name = document.getElementById("pName1");
const player2Name = document.getElementById("pName2");
const startBtn = document.getElementById("start");
const introCon = document.getElementById("intro");
const p1ID = document.getElementById("p1");

const p2ID = document.getElementById("p2");

startBtn.addEventListener("click", () => {
  if (player1Name.value === "" || player2Name.value === "") {
    alert("Please fill in all player names.");
  } else {
    p1ID.textContent = player1Name.value;
    p2ID.textContent = player2Name.value;
    introCon.classList.add("close");
    introCon.style.zIndex = 0;
  }
});

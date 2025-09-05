let rows = 16, cols = 16, mines = 40;
let board = document.getElementById("board");

function newGame() {
  board.innerHTML = "";
  board.style.gridTemplateColumns = 'repeat(${cols}, 30px)'; 
  
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => {
      cell.textContent = Math.random() < 0.2 ? "💣" : "0";
      cell.style.background = "#fff";
    });
    board.appendChild(cell);
  }
}
newGame();

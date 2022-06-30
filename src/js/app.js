const boardCell = Array.from(document.querySelectorAll('.cell'));
const countCell = boardCell.length;
let previousActiveCell = null;
console.log(typeof previousActiveCell);
function game() {
  if (document.querySelector('.active_cell')) {
    document.querySelector('.active_cell').remove();
  }
  let activeCellIndex = Math.floor(Math.random() * countCell);

  if (previousActiveCell === activeCellIndex) {
    activeCellIndex = Math.floor(Math.random() * countCell);
  }
  const activeCell = boardCell[activeCellIndex];
  previousActiveCell = activeCellIndex;

  const imgGoblin = document.createElement('div');
  imgGoblin.classList.add('active_cell');
  activeCell.appendChild(imgGoblin);
}
const intervalImg = setInterval(game, 1700);

intervalImg;

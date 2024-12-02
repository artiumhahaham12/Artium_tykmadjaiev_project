let tourn = 0;
let game = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let right = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let win_sentense = document.createElement("h3");
function tictactoe(place, line) {
  if (tourn == 0) {
    document.getElementById(`place${place}`).src = "x-solid.svg";
    game[line][place % 3] = "x";
  } else if (tourn == 1) {
    document.getElementById(`place${place}`).src = "o-solid.svg";
    game[line][place % 3] = "o";
  }
  for (let i = 0; i < 3; i++) {
    if (
      (game[i][0] == game[i][1] && game[i][0] == game[i][2]) ||
      (game[0][i] == game[1][i] && game[0][i] == game[2][i])
    ) {
      if (tourn == 0) {
        win_sentense.textContent = `the X player won!`;
      } else {
        win_sentense.textContent = `the O player won!`;
      }
      win = 1;
      console.log(win_sentense);
      win_sentense.style.color = "#040";
      win_sentense.style.fontSize = "3rem";
      win_sentense.style.width = "100vw";

      win_sentense.style.textAlign = "center";
      document.getElementById("win").appendChild(win_sentense);
      console.log("win");
    }
  }
  if (
    (game[0][0] == game[1][1] && game[0][0] == game[2][2]) ||
    (game[0][2] == game[1][1] && game[0][2] == game[2][0])
  ) {
    if (tourn == 0) {
      win_sentense.textContent = `the X player won!`;
    } else {
      win_sentense.textContent = `the O player won!`;
    }
    win_sentense.style.color = "#040";
    win_sentense.style.fontSize = "3rem";
    win_sentense.style.height = "100px";
    win_sentense.style.width = "100vw";
    win_sentense.style.textAlign = "center";
    document.getElementById("win").appendChild(win_sentense);
  }

  if (tourn == 0) tourn++;
  else tourn = 0;
}
function next() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`place${i}`).src = "";
  }
  game = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  win_sentense.textContent = ``;
  tourn = 0;
}

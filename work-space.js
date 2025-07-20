import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

const resultFoundHat = "found hat";
const resultFoundHole = "found hole";
const resultFoundField = "found filed";
const resultInsideBoard = "inside board";

class Board {
  constructor(board = [[]]) {
    this.newBoard = board;
    this.currentPosition = { x: 0, y: 0 };
    this.setCurrentPosition();
  }
  print() {
    // clear();
    for (let i = 0; i < this.newBoard.length; i++) {
      const boardRow = this.newBoard[i];
      // console.log(boardRow);
      for (let j = 0; j < boardRow.length; j++) {
        process.stdout.write(boardRow[j]);
      }
      process.stdout.write("\n");
    }
  }
  moveRight() {
    console.log("Character moves right");
    const nextPosition = {
      x: this.currentPosition.x + 1,
      y: this.currentPosition.y,
    };
    const result = this.checkBeforeMove(nextPosition);
    if (result === resultFoundField) {
      this.currentPosition.x = nextPosition.x;
      this.currentPosition.y = nextPosition.y;
      this.newBoard[this.currentPosition.y][this.currentPosition.x] =
        pathCharacter;
    }
    return result;
  }
  checkBeforeMove(nextPosition) {
    const boardHeight = this.newBoard.length;
    const boardWidth = this.newBoard[0].length;
    if (this.newBoard[nextPosition.y][nextPosition.x] === fieldCharacter) {
      return resultFoundField;
    } else if (this.newBoard[nextPosition.y][nextPosition.x] === hat) {
      return resultFoundHat;
    } else if (this.newBoard[nextPosition.y][nextPosition.x] === hole) {
      return resultFoundHole;
    } else if (
      nextPosition.y < boardHeight && // Check below
      nextPosition.y >= 0 && // Check above
      nextPosition.x < boardWidth && // Check right
      nextPosition.x >= 0 // Check left
    ) {
      return resultInsideBoard;
    } else {
      return "Unknown Move"
    }
  }

  moveLeft() {
    console.log("Character moves left");
  }
  moveUp() {
    console.log("Character moves up");
  }
  moveDown() {
    console.log("Character moves down");
  }
  setCurrentPosition() {
    for (let i = 0; i < this.newBoard.length; i++) {
      for (let j = 0; j < this.newBoard[i].length; j++) {
        console.log(`i = ${i} j = ${j} Value = ${this.newBoard[i][j]}`);
        if (this.newBoard[i][j] === "*") {
          this.currentPosition.x = j;
          this.currentPosition.y = i;
        }
      }
    }
  }
  getCurrentPosition() {
    return `x=${this.currentPosition.x} y=${this.currentPosition.y}`;
  }
}

const boardArray = new Board([
  ["O", "*", "░"],
  ["O", "░", "░"],
  ["░", "O", "^"],
]);

while (true) {
  boardArray.print();
  console.log(`This is current position: ${boardArray.getCurrentPosition()}`);
  const moveCommand = prompt("Enter your command: ");
  console.log(`Your command is ${moveCommand}.`);
  handleCommand(moveCommand);
  if (moveCommand === "q") {
    break;
  }
}

function handleCommand(moveCommand) {
  if (moveCommand === "right") {
    boardArray.moveRight();
    console.log("go right");
  } else if (moveCommand === "left") {
    boardArray.moveLeft();
    console.log("go left");
  } else if (moveCommand === "up") {
    boardArray.moveUp();
    console.log("go up");
  } else if (moveCommand === "down") {
    console.log("go down");
    boardArray.moveDown();
  } else if (moveCommand === "q") {
    console.log("quit");
  } else {
    console.log("Unknown command.Please try again.");
  }
}

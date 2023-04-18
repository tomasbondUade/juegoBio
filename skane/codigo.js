const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

//game settings
const boardSize = 10;
const gameSpeed = 100;

const squareTypes = {
    emptySquare: 0,
    emptySquare: 1,
    emptySquare: 2
};

const directions = {
    ArrowUp: -10,
    ArrowUp: 10,
    ArrowUp: 1,
    ArrowUp: -1
};

//game variables

var snake;
var score;
var direction;
var boardSquares;
var emptySquares;
var moveInterval;

const drawSnake = () =>{
    snake.forEach(square => drawSquare(square, 'snakeSquare'));
}

const drawSquare = (square, type) => {
    const [row, column] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class', `square ${type}`);

    if(type == 'empySquare'){
        emptySquares.push(square);
    } else {
        if(emptySquares.indexOf(square) !== -1){
            emptySquares.splice(emptySquares.indexOf(square),1);
        }
    }
}

function createBoard(){
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column, columnndex) => {
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('Class','square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
    })
}

function setGame(){
    snake = ['00', '01', '02','03'];
    score = snake.length;
    direction = 'ArrowRight';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
}

function startGame(){
    setGame();
    gameOverSign.style.display = 'none';
    startButton.disabled = true;
}

startButton.addEventListener('click', startGame);
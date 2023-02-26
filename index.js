// Code worked in another team project of Codecool Course 
// Code for a tic-tac-toe game developed in JS 

let gameTurn = 0;
let currentPlayer;
let board;


// this function will be called whenever the user changes
// the `select` input labeled `please select game mode`
function setGameMode(selectedValue) {
    switch (selectedValue) {
        case 'human-human':
            isPlayerXHuman = true;
            isPlayerYHuman = true;
            break;
        case 'human-ai':
            isPlayerXHuman = true;
            isPlayerYHuman = false;
            break;
        case 'ai-ai':
            isPlayerXHuman = false;
            isPlayerYHuman = false;
    }
    resetBoard();
    if (isPlayerXHuman || isPlayerYHuman === true) {
        setHTMLvisibilityForInputGameMode(false);
        setHTMLvisibilityForInputHumanCoordinates(true);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForButtonLabeledReset(true);
    } else {
        setHTMLvisibilityForInputGameMode(false);
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(true);
        setHTMLvisibilityForButtonLabeledReset(true);
    }

    displayMessage("Player X's turn");
}

// this function is called whenever the user presses the `enter`
// key in the input box labeled `enter coordinates`
// paramerter: input - the content of the input box
function processHumanCoordinate(input) {
    console.log(`'processHumanCoordinate('${input}')`);
    if (gameTurn % 2 === 0) {
        currentPlayer = 'diamond';
    } else {
        currentPlayer = 'pets';
    }

    let coordinates = extractCoordinates(input);
    // Check if cell is already occupied
    if (board[coordinates.x][coordinates.y] !== '') {
        displayMessage("Invalid input: This cell is already occupied")
        return { x: 0, y: 0 }
    }
    board[coordinates.x][coordinates.y] = currentPlayer;

    gameTurn += 1;
    displayBoard(board);

    // TODO: add a message stating either(all this is in the getwinningplayer)
    // Player X's turn
    // Player O's turn
    // It's a tie
    // Player X won 
    // Player O won 
    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage(`Player ${currentPlayer} has won !`);
    } else if (!isPlayerYHuman) {
        setHTMLvisibilityForInputAiCoordinatesInput(true);
        setHTMLvisibilityForInputHumanCoordinates(false);
    } else {
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(true);
    }
    if (winningPlayer === null && gameTurn >= 9) {
        displayMessage("It's a Tie!");
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(false);
    }
    // conditions to hide the coordinates screen for 
    // the human player & show for the button to generate AI 
    // coordinates


}

// this function is called whenever the user presses
// the button labeled `Generate AI coordinates`
function processAICoordinate() {
    console.log(`processAICoordinate()`);
    if (gameTurn % 2 === 0) {
        currentPlayer = 'diamond';
    } else {
        currentPlayer = 'pets';
    }
    let x, y;
    do {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
    } while (board[y][x] !== '');

    board[y][x] = currentPlayer;

    gameTurn += 1;
    displayBoard(board);
    const winningPlayer = getWinningPlayer(board);
    if (winningPlayer) {
        displayMessage(`Player ${currentPlayer} has won !`);
    } else if (gameTurn % 2 === 0 && isPlayerXHuman) {
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(true);
    } else {
        setHTMLvisibilityForInputAiCoordinatesInput(true);
        setHTMLvisibilityForInputHumanCoordinates(false);
    }
    if (winningPlayer === null && gameTurn >= 9) {
        displayMessage("It's a Tie!");
        setHTMLvisibilityForInputAiCoordinatesInput(false);
        setHTMLvisibilityForInputHumanCoordinates(false);
    }

}

// this function is called when the user clicks on 
// the button labeled `Restart Game`
function resetGame() {
    console.log(`resetGame()`);
    // Task #1
    // Reseting the board
    resetBoard();
    displayBoard(board);
    // Apearing starting elements
    setHTMLvisibilityForButtonLabeledReset(false);
    setHTMLvisibilityForInputHumanCoordinates(false);
    setHTMLvisibilityForInputAiCoordinatesInput(false);
    setHTMLvisibilityForInputGameMode(true);
    displayMessage("Select Game Mode");
    document.querySelector('.mode > select').value = '';
    gameTurn = 0;
}

// this function should change from A1..C3 to coordinates
// that are present in the `board` global variable
function extractCoordinates(input) {
    let letterToIndex = {
        A: 0,
        B: 1,
        C: 2,
        a: 0,
        b: 1,
        c: 2,
    };
    const [letter, number] = input.split('');
    const x = letterToIndex[letter];
    const y = parseInt(number) - 1;
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        displayMessage("Select from the next options: Letter: A,B,C,a,b,c and Number:1,2,3");
        return;
    }

    return { x, y };
}

// this function should return `X` or `O` or undefined (carefull it's not a string )
// based on interpreting the values in the board variable
function getWinningPlayer(board) {
    let winner = null;

    board.forEach((row, rowIndex) => {
        if (row[0] !== '' && row[0] === row[1] && row[1] === row[2]) {
            winner = row[0];
        }

        if (winner === null && board[0][rowIndex] !== '' && board[0][rowIndex] === board[1][rowIndex] && board[1][rowIndex] === board[2][rowIndex]) {
            winner = board[0][rowIndex];
        }
    });

    if (winner === null && board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[0][0];
    }

    if (winner === null && board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        winner = board[0][2];
    }

    if (winner === null) {
        let isTie = true;

        board.forEach((row) => {
            row.forEach((cell) => {
                if (cell === '') {
                    isTie = false;
                }
            });
        });

        if (isTie) {
            displayMessage("It's a tie");
            setHTMLvisibilityForInputHumanCoordinates(false);
            setHTMLvisibilityForInputAiCoordinatesInput(false);
        } else {
            displayMessage(` Player ${currentPlayer === "diamond" ? "pets" : "diamond"}'s turn`);
        }
    } else {
        displayMessage(`Player ${winner} wins!`);
        setHTMLvisibilityForInputHumanCoordinates(false);
        setHTMLvisibilityForInputAiCoordinatesInput(false);
    }

    return winner;
}

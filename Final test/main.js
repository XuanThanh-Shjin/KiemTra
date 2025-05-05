
let timerInterval;
let seconds = 0;
let isRunning = false;

let moveCount = 0;
let historyList = [];
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
function shuffleCells() {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const values = Array.from({length: 11}, (_, i) => (i + 1).toString());
    values.push("");
    for (let shuffle = 0; shuffle < 100; shuffle++) {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }
    }
    const colors = [
        "#ccffcc", "#ffcccc", "#cce5ff", "#e6ccff", "#ffffcc", "#ffccff", "#cce5ff", "#f2f2f2", "#ccffcc", "#ffffcc", "#ccffcc", "#ccffcc"
    ];
    cells.forEach((cell, index) => {
        cell.classList.remove("black-cell");
        cell.textContent = values[index];
        cell.style.backgroundColor = colors[index];
        if (values[index] === "") {
            cell.classList.add("black-cell");
            cell.style.backgroundColor = "black";
        }
    });
}
function checkWin() {
    const cells = Array.from(document.querySelectorAll(".cell"));
    for (let i = 0; i < cells.length - 1; i++) {
        if (cells[i].textContent !== (i + 1).toString()) {
            return false;
        }
    }
    return true;
}
function showWinMessage() {
    alert("YOU WIN!");
    clearInterval(timerInterval);
    isRunning = false;
    document.querySelector(".start-button").textContent = "Chơi lại";
}
function Game() {
    const startButton = document.querySelector(".start-button");
    const timerDisplay = document.querySelector(".time p");
    if (!isRunning) {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            if (index < 11) {
                cell.textContent = (index + 1).toString();
            } else {
                cell.textContent = "";
            }
            if (index === 0) {
                cell.style.backgroundColor = "#ccffcc";
            } else if (index === 1) {
                cell.style.backgroundColor = "#ffcccc";
            } else if (index === 2) {
                cell.style.backgroundColor = "#cce5ff";
            } else if (index === 3) {
                cell.style.backgroundColor = "#e6ccff";
            } else if (index === 4) {
                cell.style.backgroundColor = "#ffffcc";
            } else if (index === 5) {
                cell.style.backgroundColor = "#ffccff";
            } else if (index === 6) {
                cell.style.backgroundColor = "#cce5ff";
            } else if (index === 7) {
                cell.style.backgroundColor = "#f2f2f2";
            } else if (index === 8) {
                cell.style.backgroundColor = "#ccffcc";
            } else if (index === 9) {
                cell.style.backgroundColor = "#ffffcc";
            } else if (index === 10) {
                cell.style.backgroundColor = "#ccffcc"
            }
        });
        document.querySelectorAll(".black-cell").forEach(cell => {
            cell.classList.remove("black-cell");
            cell.style.backgroundColor = "";
        });

        isRunning = true;
        startButton.textContent = "Kết thúc";
        shuffleCells();
        clearInterval(timerInterval);
        seconds = 0;
        timerDisplay.textContent = formatTime(seconds);
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
        moveCount = 0;
    } else {
        isRunning = false;
        startButton.textContent = "Bắt đầu";
        clearInterval(timerInterval);
    }
}
function moveBlackCell(direction) {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const blackCellIndex = cells.findIndex(cell => cell.classList.contains("black-cell"));
    let targetIndex;
    if (direction === "ArrowUp" || direction === "w") {
        targetIndex = blackCellIndex - 4;
    } else if (direction === "ArrowDown" || direction === "s") {
        targetIndex = blackCellIndex + 4;
    } else if (direction === "ArrowLeft" || direction === "a") {
        targetIndex = blackCellIndex - 1;
    } else if (direction === "ArrowRight" || direction === "d") {
        targetIndex = blackCellIndex + 1;
    }
    if (targetIndex >= 0 && targetIndex < cells.length) {
        if ((direction === "ArrowLeft" || direction === "a") && blackCellIndex % 4 === 0) return;
        if ((direction === "ArrowRight" || direction === "d") && blackCellIndex % 4 === 3) return;
        const tempContent = cells[targetIndex].textContent;
        const tempBackground = cells[targetIndex].style.backgroundColor;
        cells[targetIndex].textContent = "";
        cells[targetIndex].style.backgroundColor = "black";
        cells[targetIndex].classList.add("black-cell");
        cells[blackCellIndex].textContent = tempContent;
        cells[blackCellIndex].style.backgroundColor = tempBackground;
        cells[blackCellIndex].classList.remove("black-cell");
        moveCount++;
        if (checkWin()) {
            showWinMessage();
        }
    }
}
document.addEventListener("keydown", (event) => {
    if (isRunning) {
        moveBlackCell(event.key);
    }
});
document.querySelector(".start-button").addEventListener("click", Game);
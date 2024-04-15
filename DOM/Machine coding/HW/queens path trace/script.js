const board = document.querySelector(".board");
const rowList = document.querySelectorAll(".row");
const checkBoxList = document.querySelectorAll(".checkbox");
board.addEventListener("click", handleTrigger);
function handleTrigger(e) {
    let curCol = e.target.id;
    let currRow = e.target.parentNode.id;
    let storageIdx = new Set();
    resetColor();
    bottomRight(currRow, curCol, storageIdx);
    bottomLeft(currRow, curCol, storageIdx);
    topLeft(currRow, curCol, storageIdx);
    topRight(currRow, curCol, storageIdx);
    horizPath(currRow, curCol, storageIdx);
    verticalPath(currRow, curCol, storageIdx);
    console.log(storageIdx)
    colorBoxes(currRow, curCol, storageIdx)
}
function resetColor() {
    rowList.forEach(rele => {
        rele.querySelectorAll(".checkbox").forEach(cele => {
            let _row = parseInt(rele.getAttribute('id'));
            let _col = parseInt(cele.getAttribute('id'));
            if (_row % 2 != 0) {
                if (_col % 2 == 0) {
                    cele.style.backgroundColor = 'white'
                } else {
                    cele.style.backgroundColor = 'black'
                }
            }
            else {
                if (_col % 2 != 0) {
                    cele.style.backgroundColor = 'white'
                } else {
                    cele.style.backgroundColor = 'black'
                }
            }
        })
    });
}
function colorBoxes(currRow, curCol, storageIdx) {
    rowList.forEach(rele => {
        rele.querySelectorAll(".checkbox").forEach(cele => {
            let _row = parseInt(rele.getAttribute('id'));
            let _col = parseInt(cele.getAttribute('id'));

            if (storageIdx.has(`${_row}-${_col}`)) {
                cele.style.backgroundColor = 'red'
            }
            if (_row == parseInt(currRow) && _col == parseInt(curCol)) {
                cele.style.backgroundColor = 'red'
            }
        })
    });
}
function horizPath(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    _col = (8 * (_row - 1)) + 1;

    while (_col <= (8 * _row)) {
        storageIdx.add(`${_row}-${_col}`);
        _col++;
    }
}
function verticalPath(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    let row = 1;
    _col = _col - (8 * (_row - 1));

    while (row <= 8 && _col <= 64) {
        storageIdx.add(`${row}-${_col}`);
        row++;
        _col = _col + 8;
    }
}
function bottomRight(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    _row++;
    _col += 9;

    while (_row < 9 && _col <= 64) {
        storageIdx.add(`${_row}-${_col}`);
        _row++;
        _col += 9;
    }
}
function bottomLeft(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    _row++;
    _col += 7;

    while (_row < 9 && _col <= 64) {
        storageIdx.add(`${_row}-${_col}`);
        _row++;
        _col += 7;
    }
}
function topRight(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    _row--;
    _col -= 7;

    while (_row > 0 && _col > 0) {
        storageIdx.add(`${_row}-${_col}`);
        _row--;
        _col -= 7;
    }
}
function topLeft(_row, _col, storageIdx) {
    _row = parseInt(_row);
    _col = parseInt(_col);
    _row--;
    _col -= 9;

    while (_row > 0 && _col > 0) {
        storageIdx.add(`${_row}-${_col}`);
        _row--;
        _col -= 9;
    }
}

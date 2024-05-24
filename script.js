document.getElementById('bingoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('customList').value;
    const items = input.split(',').map(item => item.trim());
    generateBingoBoard(items);
});

function generateBingoBoard(items) {
    const board = document.getElementById('bingoBoard');
    board.innerHTML = '';
    
    const shuffledItems = shuffle(items).slice(0, 25);
    
    shuffledItems.forEach(item => {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.textContent = item;
        board.appendChild(cell);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

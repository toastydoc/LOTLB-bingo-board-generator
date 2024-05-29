// Predefined list of values for the Bingo board spaces
const predefinedItems = [
"Show Starts Late", "Things T-Vo watched", "9.8 Karate Chop Meme", "Laura Come to Me Meme", 
"Say the Word freestyle", "Randal Park freestyle", "DAAAAMN", "Fine Folks at Covrprice...", 
"I LOVE Peach Momoko Meme", "T-Vo talks about selling his collection", "Tivo's fingerless gloves",
"Dog snoring in the background", "Dave Stevens mention", "Bingo-Ling-F*%(er", "YOUR MUTED", 
"Blond in a Red Dress", "JB wearing a hat", "Someone says Homage wrong", "SHOUTOUT", "The term RAWDOG", 
"Some tips $5", "Not so seemless transition", "FREE SPOT", "T-Vo has to login to Covrprice", "Crew stops too look at a horror comic on Shaker list", "Item 25", "Item 26", "Item 27", "Item 28", 
"Item 29", "Item 30", "Item 31", "Item 32", "Item 33", "Item 34", "Item 35"   
];

document.addEventListener('DOMContentLoaded', function() {
    generateBingoBoard(predefinedItems);
    document.getElementById('refreshButton').addEventListener('click', () => generateBingoBoard(predefinedItems));
    document.getElementById('printButton').addEventListener('click', () => window.print());

});

function generateBingoBoard(items) {
    const board = document.getElementById('bingoBoard');
    // Clear board but keep headers
    board.innerHTML = '<div class="bingo-header">L</div><div class="bingo-header">O</div><div class="bingo-header">T</div><div class="bingo-header">L</div><div class="bingo-header">B</div>';

    // Shuffle items and select the first 25
    const shuffledItems = shuffle(items).slice(0, 25);

    // Create Bingo cells
    shuffledItems.forEach(item => {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.textContent = item;
        cell.addEventListener('click', () => toggleCell(cell));
        board.appendChild(cell);
    });
}
function toggleCell(cell) {
    if (cell.classList.contains('marked')) {
        cell.classList.remove('marked');
    } else {
        cell.classList.add('marked');
    }
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

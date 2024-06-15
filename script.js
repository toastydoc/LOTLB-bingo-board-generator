// Predefined list of values for the Bingo board spaces
const predefinedItems = [
"Show Starts Late", "Things T-Vo watched", "9.8 Karate Chop Meme", "Not a comic!", 
"Say the Word freestyle", "Randal Park freestyle", "DAAAAMN", "Fine Folks at Covrprice...", 
"I LOVE Peach Momoko Meme", "Crew shares a T-Vo Story", "Blessings and salutations",
"Dog snoring in the background", "Dave Stevens mention", "Bingo-Ling-F*%(er", "YOU'RE MUTED", 
"Blond in a Red Dress", "JB wearing a hat", "Someone says Homage wrong", "SHOUTOUT", "The term RAWDOG", 
"Someone tips $5", "Not so seemless transition", "Someone tips $2", "Streamer has to re-log into Covrprice", 
"Crew stops to look at a horror cover", "Crew stops to look at a Good Girl cover", "Dollar Bin comic makes the list", 
"Movie Rumor spikes a book", "SOTI history lesson", "Coffee with Scratch Bastard", "Welcome to the O'fer list",
"Video Game Book on list", "Oh look, Spawn #1", "Oh look, Spider-Man #300", "JSC Variant on list", "Artist name butchered", 
"Free Spot", "Retailer Exclusive", "1:200 incentive", "PROOF OF LIFE", "Things Laura Said", "Taylor Swift rumor", "Gabe namedrops",
"Marty's Blessing", "Dogs on camera", "Marty Reminiscing", "Read the Tea Leaves", "SVU Mockery"    
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

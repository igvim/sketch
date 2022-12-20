const container = document.querySelector('.container');
const change = document.querySelector('.change');
const clear = document.querySelector('.clear');
let gridSize = 16;

createGrid(gridSize);

change.addEventListener('click', () => {
    gridSize = prompt('Enter a new grid size');
    while (isNaN(gridSize) || gridSize > 100) {
        gridSize = prompt('Enter a number less than 100');
    }
    if (gridSize) {
        resetGrid(gridSize);
    }
});

clear.addEventListener('click', () => {
    resetGrid(gridSize);
});

function createGrid(gridSize) {
    for (i = 0; i < gridSize**2; i++) {
        const gridItem = document.createElement('div');
        const itemDim = 100/gridSize;
        gridItem.style.width = `${itemDim}%`;
        gridItem.style.height = `${itemDim}%`;
        container.appendChild(gridItem);
        gridItem.addEventListener('mouseenter', (e) => {
            e.target.classList.add('sketched');
        });
    }
}

function destroyGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function resetGrid(gridSize) {
    destroyGrid();
    createGrid(gridSize);
}
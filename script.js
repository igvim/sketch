/*
define size of container!
create elements
append them
make elements square?
*/

const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridSize = 16;

createGrid(gridSize);

/*
destroy existing grid
take in new grid dimension
if not a number or greater than 100, repeat prompt, else
create new grid with new grid size
*/

button.addEventListener('click', (e) => {
    gridSize = prompt('Enter a new grid size');
    while (isNaN(gridSize) || gridSize > 100) {
        gridSize = prompt('Enter a number less than 100');
    }
    destroyGrid();
    createGrid(gridSize);
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
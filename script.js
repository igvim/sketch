/*
define size of container!
create elements
append them
make elements square?
*/

container = document.querySelector('.container');

for (i = 0; i < 16**2; i++) {
    gridItem = document.createElement('div');
    gridItem.classList.add('item');
    container.appendChild(gridItem);
    gridItem.addEventListener('mouseenter', (e) => {
        e.target.classList.add('hovered');
    })
}
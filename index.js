let container = document.querySelector('.container');
const button = document.querySelector('button');
const body = document.querySelector('body');

function createGrid (size) {
    body.removeChild(container);
    container = document.createElement('div');
    container.setAttribute("class", "container");
    body.appendChild(container);

    for (let i = 0;i < size*size;i++) {
        const gridSpace = document.createElement('div');
        gridSpace.setAttribute("class", "gridSpace");
        gridSpace.style.width = 800/size + "px";
        gridSpace.style.height = 800/size + "px";
        container.appendChild(gridSpace);
    }
    
    const gridSpaces = document.querySelectorAll('.gridSpace');
    gridSpaces.forEach((gridspace) => {
        gridspace.addEventListener('mouseover', function (e) {
            let colorOne = Math.round(Math.random()*255)
            let colorTwo = Math.round(Math.random()*255)
            let colorThree = Math.round(Math.random()*255)
            e.target.style.backgroundColor = "rgb(" + colorOne + ", " + colorTwo + ", " + colorThree+")";
            e.target.style.opacity = +e.target.style.opacity + 0.1;
        });
    });
    
}

createGrid(16);

button.addEventListener('click', function (e) {
    let size = prompt('How many squares per side do you want?(Max is 100)');
    while ( size <= 0 || size > 100) {
        size = prompt('Input a valid number from 1 to 100');
    }
    createGrid(size);
});
const orange_btn = document.querySelector('#second-color');
const green_btn = document.querySelector('#third-color');
const blue_btn = document.querySelector('#first-color');

const black_background_color_btn = document.querySelector("#black");
const white_background_color_btn = document.querySelector("#white");
const container = document.querySelector('.main-container')

const reset_btn = document.querySelector("#reset-btn"); 
const one_hundred_btn = document.querySelector("#one-hundred"); 
const sixteen_btn = document.querySelector("#sixteen");
const custom_btn = document.querySelector("#custom-btn");

let currentColor = '';
let currentBackgroundColor = '';



function createGrid(squareGridLength, currentColor, currentBackgroundColor) { // creates a new grid at the start or when user decides they want to change the size 
    for (let i = 0; i < (squareGridLength **2); i++){ 
    let newGridItem = document.createElement('div');
    
    newGridItem.classList.add("grid-element", `${currentColor}`, `${currentBackgroundColor}`);
    let gridElementSize = 640/squareGridLength;
    newGridItem.setAttribute("style", `height: ${gridElementSize}px; width: ${gridElementSize}px;`);
    container.appendChild(newGridItem); 

    }
    let gridHoveredOver = document.querySelectorAll(".grid-element"); 
        gridHoveredOver.forEach((gridBox) => { 
        gridBox.addEventListener("mouseover", (e) =>{ 
            e.target.classList.add('draw');
        });
    });

}

function destroyGrid() { // clears a grid so a new one can be made 
    let parentContainer = document.querySelector(".main-container"); 
    while (parentContainer.firstChild){ 
        parentContainer.removeChild(parentContainer.firstChild);
    }
}

createGrid(16); // initializes the default grid with (16x16) white background and blue starter pen 
let gridHoveredOver = document.querySelectorAll(".grid-element"); 
sixteen_btn.classList.add("button-selected");
/*
Pen Button To Change Color
*/



blue_btn.addEventListener('click', () => { // Switches to a blue pen color
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("orange");
        gridBox.classList.remove("green");
        gridBox.classList.add("blue");
       

    })
    blue_btn.classList.add('highlight-selection');
    green_btn.classList.remove('highlight-selection');
    orange_btn.classList.remove('highlight-selection');
})


green_btn.addEventListener('click', () => { // Switches to a green pen color 
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("orange");
        gridBox.classList.remove("blue");
        gridBox.classList.add("green");
    })
    blue_btn.classList.remove('highlight-selection');
    green_btn.classList.add('highlight-selection');
    orange_btn.classList.remove('highlight-selection');
})


orange_btn.addEventListener('click', () => {  // Switches to a orange pen color
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("blue");
        gridBox.classList.remove("green");
        gridBox.classList.add("orange");
    })
    blue_btn.classList.remove('highlight-selection');
    green_btn.classList.remove('highlight-selection');
    orange_btn.classList.add('highlight-selection');
})

/* 
Change background color: 
*/


black_background_color_btn.addEventListener('click', () => { // Switches to a black drawing background
    gridHoveredOver.forEach((gridBox) => {  
        gridBox.classList.remove('white');
        gridBox.classList.add('black'); 
    })
    black_background_color_btn.classList.add('highlight-selection'); 
    white_background_color_btn.classList.remove('highlight-selection');
})

white_background_color_btn.addEventListener('click', () => { // Switches to a white drawing background
    gridHoveredOver.forEach((gridBox) => {  
        gridBox.classList.remove('black');
        gridBox.classList.add('white'); 
    })
    black_background_color_btn.classList.remove('highlight-selection'); 
    white_background_color_btn.classList.add('highlight-selection');
})

reset_btn.addEventListener('click', () => { // Tired of drawing? This clears the board
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("draw", "orange","green", "blue");
        if (blue_btn.classList.contains("highlight-selection")){
            gridBox.classList.add("blue"); 
        }
        else if (green_btn.classList.contains("highlight-selection")){ 
            gridBox.classList.add("green");
        }
        else if (orange_btn.classList.contains("highlight-selection")){ 
            gridBox.classList.add("orange");
        }
        
    })
    
})
one_hundred_btn.addEventListener('click', () => { // (100x100) grid size. Allows the user to select this option and update the grid
    destroyGrid();
    if (blue_btn.classList.contains("highlight-selection")){
        currentColor = 'blue'; 
    }
    else if (green_btn.classList.contains("highlight-selection")){ 
        currentColor = 'green';
    }
    else if (orange_btn.classList.contains("highlight-selection")){ 
        currentColor = 'orange';
    }
    if (black_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'black';
    }
    else if (white_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'white';
    }
    createGrid(100, currentColor, currentBackgroundColor);
  
    sixteen_btn.classList.remove("button-selected");
    one_hundred_btn.classList.add("button-selected"); 
    custom_btn.classList.remove("button-selected");
    custom_btn.textContent = `Custom`;
    gridHoveredOver = document.querySelectorAll(".grid-element");
})

sixteen_btn.addEventListener('click', () => { // This is the default grid size (16 x 16). Allows the user to switch back to it if desired.
    destroyGrid();
    if (blue_btn.classList.contains("highlight-selection")){
        currentColor = 'blue'; 
    }
    else if (green_btn.classList.contains("highlight-selection")){ 
        currentColor = 'green';
    }
    else if (orange_btn.classList.contains("highlight-selection")){ 
        currentColor = 'orange';
    }
    if (black_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'black';
    }
    else if (white_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'white';
    }
    createGrid(16, currentColor, currentBackgroundColor);
    
    sixteen_btn.classList.add("button-selected");
    one_hundred_btn.classList.remove("button-selected"); 
    custom_btn.classList.remove("button-selected");
    custom_btn.textContent = `Custom`;
    gridHoveredOver = document.querySelectorAll(".grid-element");
})

custom_btn.addEventListener('click', () => { // Allows the user to input a custom grid size and updates the grid 
    let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));
    destroyGrid();
    if (blue_btn.classList.contains("highlight-selection")){
        currentColor = 'blue'; 
    }
    else if (green_btn.classList.contains("highlight-selection")){ 
        currentColor = 'green';
    }
    else if (orange_btn.classList.contains("highlight-selection")){ 
        currentColor = 'orange';
    }
    if (black_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'black';
    }
    else if (white_background_color_btn.classList.contains("highlight-selection")){
        currentBackgroundColor = 'white';
    }
    createGrid(userInputForGrid, currentColor, currentBackgroundColor); 
    
    sixteen_btn.classList.remove("button-selected");
    one_hundred_btn.classList.remove("button-selected"); 
    custom_btn.classList.add("button-selected");
    custom_btn.textContent = `Custom: ${userInputForGrid} `;
    
    gridHoveredOver = document.querySelectorAll(".grid-element");

})
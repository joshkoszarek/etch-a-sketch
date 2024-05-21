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

//let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));
//let userInputForGrid = 16;



function createGrid(squareGridLength) { 
    for (let i = 0; i < (squareGridLength **2); i++){ 
    let newGridItem = document.createElement('div');
    newGridItem.setAttribute("class", "grid-element"); 
   
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

function destroyGrid() { 
    let parentContainer = document.querySelector(".main-container"); 
    while (parentContainer.firstChild){ 
        parentContainer.removeChild(parentContainer.firstChild);
    }
}

createGrid(16);
let gridHoveredOver = document.querySelectorAll(".grid-element"); 
sixteen_btn.classList.add("button-selected");
/*
Pen Button To Change Color
*/
/*
gridHoveredOver.forEach((gridBox) => { 
    gridBox.classList.add('blue');     
    gridBox.classList.add('white');
} )

blue_btn.classList.add('highlight-selection');
white_background_color_btn.classList('highlight-selection');
*/

blue_btn.addEventListener('click', () => { 
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("orange");
        gridBox.classList.remove("green");
        gridBox.classList.add("blue");
       

    })
    blue_btn.classList.add('highlight-selection');
    green_btn.classList.remove('highlight-selection');
    orange_btn.classList.remove('highlight-selection');
})


green_btn.addEventListener('click', () => { 
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("orange");
        gridBox.classList.remove("blue");
        gridBox.classList.add("green");
    })
    blue_btn.classList.remove('highlight-selection');
    green_btn.classList.add('highlight-selection');
    orange_btn.classList.remove('highlight-selection');
})


orange_btn.addEventListener('click', () => { 
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


black_background_color_btn.addEventListener('click', () => { 
    gridHoveredOver.forEach((gridBox) => {  
        gridBox.classList.remove('white');
        gridBox.classList.add('black'); 
    })
    black_background_color_btn.classList.add('highlight-selection'); 
    white_background_color_btn.classList.remove('highlight-selection');
})

white_background_color_btn.addEventListener('click', () => { 
    gridHoveredOver.forEach((gridBox) => {  
        gridBox.classList.remove('black');
        gridBox.classList.add('white'); 
    })
    black_background_color_btn.classList.remove('highlight-selection'); 
    white_background_color_btn.classList.add('highlight-selection');
})

reset_btn.addEventListener('click', () => { 
    gridHoveredOver.forEach((gridBox) => { 
        gridBox.classList.remove("draw", "orange","green", "blue");
        gridBox.classList.add("blue"); 
    })
    blue_btn.classList.add("highlight-selection");
    orange_btn.classList.remove("highlight-selection");
    green_btn.classList.remove("highlight-selection");
})

one_hundred_btn.addEventListener('click', () => { 
    destroyGrid();
    createGrid(100);
    black_background_color_btn.classList.remove('highlight-selection');
    sixteen_btn.classList.remove("button-selected");
    one_hundred_btn.classList.add("button-selected"); 
    custom_btn.classList.remove("button-selected");
    custom_btn.textContent = `Custom`;
    gridHoveredOver = document.querySelectorAll(".grid-element");
})

sixteen_btn.addEventListener('click', () => { 
    destroyGrid();
    createGrid(16);
    black_background_color_btn.classList.remove('highlight-selection');
    sixteen_btn.classList.add("button-selected");
    one_hundred_btn.classList.remove("button-selected"); 
    custom_btn.classList.remove("button-selected");
    custom_btn.textContent = `Custom`;
    gridHoveredOver = document.querySelectorAll(".grid-element");
})

custom_btn.addEventListener('click', () => { 
    let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));
    destroyGrid();
    createGrid(userInputForGrid); 
    black_background_color_btn.classList.remove('highlight-selection');
    sixteen_btn.classList.remove("button-selected");
    one_hundred_btn.classList.remove("button-selected"); 
    custom_btn.classList.add("button-selected");
    custom_btn.textContent = `Custom: ${userInputForGrid} `;
    
    gridHoveredOver = document.querySelectorAll(".grid-element");

})
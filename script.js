const orange_btn = document.querySelector('#second-color');
const green_btn = document.querySelector('#third-color');
const blue_btn = document.querySelector('#first-color');

const black_background_color_btn = document.querySelector("#black");
const white_background_color_btn = document.querySelector("#white");
const container = document.querySelector('.main-container')

const reset_btn = document.querySelector("#reset-btn"); 

//let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));
let userInputForGrid = 16;

for (let i = 0; i < (userInputForGrid **2); i++){ 
    let newGridItem = document.createElement('div');
    newGridItem.setAttribute("class", "grid-element"); 
   
    let gridElementSize = 640/userInputForGrid;
    newGridItem.setAttribute("style", `height: ${gridElementSize}px; width: ${gridElementSize}px;`);
    container.appendChild(newGridItem); 

}

let gridHoveredOver = document.querySelectorAll(".grid-element"); 
gridHoveredOver.forEach((gridBox) => { 
    gridBox.addEventListener("mouseover", (e) =>{ 
        e.target.classList.add('draw');
    });
});


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
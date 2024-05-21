

//let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));
let userInputForGrid = 16;
const container = document.querySelector('.main-container')
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
const orange_btn = document.querySelector('#second-color');
const green_btn = document.querySelector('#third-color');
const blue_btn = document.querySelector('#first-color');
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


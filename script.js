console.log('hello there'); 

let userInputForGrid = Number(prompt('Please enter a number between 1 and 100:'));

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
gridHoveredOver.addEventListener("mouseover", () => { 
    console.log(); 
});
*/ 

/*
gridHoveredOver.addEventListener("click", (e) => { 
    e.target.style.backgroundColor = 'blue';
})
*/
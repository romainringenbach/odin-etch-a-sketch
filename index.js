const grid = document.querySelector(".grid");
const body = document.querySelector("body");

const DEFAULT_SIZE = 16;
const GAP_SIZE = 2;
const GRID_HEIGHT_POURCENT = 0.8 // 90% of the body element)

function removeChildren(element){
    while(element.hasChildNodes()){
        element.removeChild(element.firstChild);
    }
}

function generateTheGrid(size=DEFAULT_SIZE){
    removeChildren(grid);

    let bodyHeight = body.getBoundingClientRect().height;
    let gridElementHeight = Math.floor((bodyHeight*GRID_HEIGHT_POURCENT - GAP_SIZE * (size+1))/size);
    
    let gridHeight = gridElementHeight*size + GAP_SIZE * (size+1);
    grid.style.height = `${gridHeight}px`;
    grid.style.padding = `${GAP_SIZE}px`;
    grid.style.gap = `${GAP_SIZE}px`;

    for (let index = 0; index < (size*size); index++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-element";
        gridElement.style.height = `${gridElementHeight}px`;
        grid.appendChild(gridElement);
    }

    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseover", (e) => {
            if(e.buttons)
                e.target.style.backgroundColor = "black";
        });

        gridElement.addEventListener("mousedown", (e) => {
            e.target.style.backgroundColor = (e.target.style.backgroundColor === "black" ? "white" : "black");
        });
    });
}

generateTheGrid();

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click",() => {
    const newSize = prompt("Pleaser enter a new size to reset the grid. (Note: size will be limited to 100.)","16");
    if(newSize){
        generateTheGrid(Math.min(+newSize,100));
    }
})
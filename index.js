const grid = document.querySelector(".grid");

for (let index = 0; index < (16*16); index++) {
    const gridElement = document.createElement("div");
    gridElement.className = "grid-element";
    grid.appendChild(gridElement);    
}
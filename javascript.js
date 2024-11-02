const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "column";

const gridChanger = document.createElement("button");
gridChanger.classList.add("gridChanger");
container.append(gridChanger);
gridChanger.style.width = "200px";
gridChanger.style.padding = "10px";
gridChanger.style.margin = "10px";
gridChanger.textContent = "Click to change grid count";

let answer = "";
gridChanger.addEventListener("click",function(){
    answer = prompt("What should be new size by square size?");
    gridDesigner(answer);
})

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.append(gridContainer);
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.gap = "10px";

function gridDesigner(length){
    const cleaner = document.querySelectorAll(".grid");
    cleaner.forEach(clean => {
        clean.remove();
    })
    gridContainer.style.width = ((length*64)) + "px";

    for(i = 0; i<(length*length); i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        gridContainer.append(grid);
        grid.style.width = "50px";
        grid.style.height = "50px";
        grid.style.border = "2px solid black"
        grid.style.backgroundColor = "white";
    
        grid.addEventListener("mouseover",function(){
            if(grid.style.backgroundColor == "white"){
                grid.style.backgroundColor = "gray";
            }
        })
        grid.addEventListener("mouseout",function(){
            if(grid.style.backgroundColor == "gray"){
                grid.style.backgroundColor = "white";
            }
            else{
            }
        })
        grid.addEventListener("click",function(){
            grid.style.backgroundColor = "green";
        })
    }
}
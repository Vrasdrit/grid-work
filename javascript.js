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
gridChanger.addEventListener("click",function(){
    return prompt("What should be new size?");
})

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.append(gridContainer);
gridContainer.style.display = "flex";
gridContainer.style.width = "250px";
gridContainer.style.flexWrap = "wrap";

for(i = 0; i<(16); i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.append(grid);
    grid.style.width = "50px";
    grid.style.height = "50px";
    grid.style.margin = "1px";
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
let daddy_div = document.querySelector(".daddy");
let button_input = document.querySelector("button.input");
let append_child = 0;
let unos;
let unoss;
button_input.addEventListener("click", () => {
    unos = prompt("Unesi broj od 1 do 64 - tolika ce biti velicina grida");
    unoss = parseInt(unos);
    daddy_div.style.gridTemplateRows = `repeat(${unoss}, auto)`;
    daddy_div.style.gridTemplateColumns = `repeat(${unoss}, auto)`;
    
    clearAll();
    createGrid(unoss);
});

// default 16*16 grid, initially created
daddy_div.style.display = "grid";
daddy_div.style.gridTemplateColumns = "repeat(16, auto)";
daddy_div.style.gridTemplateRows = "repeat(16, auto)";
createGrid(16);




function createGrid(gridz) {

    for (let i = 0; i<gridz; i++) {
        for (let j=0;j<gridz;j++) {
            let child_div = document.createElement("div");
            
            child_div.setAttribute("class", "boxlet");
            // daddy_div.style.
            daddy_div.appendChild(child_div);
            // child_div.textContent = "A";
        };
    };

    let boxlet = document.querySelectorAll(".boxlet");
    
    
    boxlet.forEach(element => {
        element.addEventListener("mouseover", () => {       // I GOT U BASTARD / mora ovaj dio ici pod createGrid,
        element.classList.add("active");                    // u suprotnom napravi event samo za incijalnih 16*16 gridova
    });
    });
    
};

function clearAll () {
    let boxlett = document.querySelectorAll(".boxlet");
    boxlett.forEach(element => {
        element.style.backgroundColor = "unset";
    });
};




// OVO ce biti da dobijes kombiniranu funkciju za mousdown i mouse movement tokom crtanja.
// zasad se cini prekomplicirano i potrosio si 2 ipo sata, ali dobro.
// michalosman je godinu kasnije to miijenjao tako da ajde jadan, mozes ti i bez toga zasad

/*
let mouseDown = 0;
document.body.onmousedown = function() {
    mouseDown = 1;
};
document.body.onmouseup = function() {
    mouseDown = 0;
};
*/




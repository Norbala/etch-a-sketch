let daddy_div = document.querySelector(".daddy");

let append_child = 0;

for (let i = 0; i<16; i++) {
    for (let j=0;j<16;j++) {
        let child_div = document.createElement("div");
        
        child_div.setAttribute("class", "boxlet");
        // daddy_div.style.
        daddy_div.appendChild(child_div);
        // child_div.textContent = "A";
    };
};


let boxlet = document.querySelectorAll(".boxlet");

boxlet.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("active")
    });
});



let opinionpassed = 0;
let main = document.querySelector("#main-display");
let back = document.querySelector("#submit-display");
let button = document.querySelector("#submit");

button.addEventListener("click", submit)
for(let i=1; i<=5; i++){
    let view = () =>{
        opinionpassed = i;
        display(i);
    }

    document.querySelector("#button"+i).addEventListener("click", view);
    console.log("loop nuber" + i);
}


function submit(){
    main.classList.add("none");
    back.classList.remove("none");
}

function display(opinion){
    document.querySelector("#rating-given").innerHTML = opinion;
}


let counter = 0;
let colorId = "";

main = function() {
    console.log("Ready");
    


    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    

    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };

    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };

    document.querySelector("#blueButton").onclick = (event) => {
        console.log("blue button");
        colorId = "blue";
        updateColor("blue");
    }

    document.querySelector("#greenButton").onclick = (event) => {
        console.log("green button");
        colorId = "green";
        updateColor("green");
    }

    document.querySelector("#redButton").onclick = (event) => {
        console.log("red button");
        colorId = "red";
        updateColor("red");
    }

    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("purple button");
        colorId = "purple";
        updateColor("purple");
    }
}


updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`;

}

updateColor = function(color) {
    document.querySelector("#favoriteColorBox").innerHTML = `${colorId}`;
    let plsChange = document.querySelector("#favoriteColorBox");
    plsChange.style.backgroundColor = color;
}

main();
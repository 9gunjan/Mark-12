const sides = document.querySelectorAll(".side");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output");

function calculateSum(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    console.log("clicked!");
    const sumOfSquares = calculateSum(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The Hypotenuse is " + hypotenuse;
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);
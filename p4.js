const sides = document.querySelectorAll(".inputs");
const areaBtn = document.querySelector("#check-area");
const outputBox = document.querySelector("#output");
function areaa(b,h){
    const area = 1/2*(b*h);
    return area;
}
function calculateArea(){
    const area = areaa(Number(sides[0].value),Number(sides[1].value));
    outputBox.innerText = "The area is " + area;
}

areaBtn.addEventListener("click" , calculateArea);
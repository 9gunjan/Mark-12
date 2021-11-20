const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output");

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}



function isTriangle(){

    const sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(sumOfAngles === 180){
        outputBox.innerText = "Yes! It forms a triangle.";
    }else{
        outputBox.innerText="No! It does not forms a triangle."
    }

}

isTriangleButton.addEventListener("click",isTriangle);

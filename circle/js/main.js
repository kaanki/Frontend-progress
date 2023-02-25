const boxE1 = document.querySelector("#circle");

boxE1.addEventListener("click", () => {
    calculatePerimeter(boxE1.offsetHeight / 2)});
function calculatePerimeter( radius){
    const result =  2 * 3.14 * radius
    console.log(result);
    document.getElementById("radius-text").innerHTML = result;
} 
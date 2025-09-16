let btn = document.querySelector("button")
let hed = document.querySelector("p");
let div = document.querySelector("div");

btn.addEventListener("click",function (){
    let randomColor = getRandomColor();
    hed.innerText =randomColor;
    div.style.backgroundColor = randomColor; 
})

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
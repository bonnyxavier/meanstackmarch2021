var clk = document.querySelector("#clk")

clk.addEventListener('click', ()=>{
    clk.innerHTML ="clicked"
    clk.style.color = "red"
})


var dbclk = document.querySelector("#dbclk")


dbclk.addEventListener('dblclick',()=>{
    dbclk.innerHTML="double clicked";
    dbclk.style.color = "blue";
})

var mouseover = document.querySelector("#ove")

mouseover.addEventListener("mouseover",()=>{
    mouseover.innerHTML="mouse over me"
    mouseover.style.color="green"
})
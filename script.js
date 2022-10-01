
const canvas=document.querySelector('canvas');
 toolBtns=document.querySelector(".tool");
ctx=canvas.getContext("2d");


let isDraw=false;
brushWidth=5;

window.addEventListener("load",()=>{
    // setting canvas width & height 
    // now draw along with cursor
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight
});

const drawing=(e)=>{
    if(!isDraw) return ; // if isDraw false return here
    //creating lline to mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke() // fill line with color
}

const startDraw=()=>{
    isDraw=true;
    ctx.beginPath() // start with new path...
    ctx.lineWidth=brushWidth; // passing brush size as line width

}

toolBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        console.log(btn.id);
    })
})

canvas.addEventListener("mousedown",startDraw);
canvas.addEventListener("mousemove",drawing);
canvas.addEventListener("mouseup",()=>isDraw=false); // starts working from last point 

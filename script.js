
const canvas=document.querySelector('canvas');
ctx=canvas.getContext("2d");

const drawing=(e)=>{
    //creating lline to mouse pointer
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke() // fill line with color
}


canvas.addEventListener("mousemove",drawing);

"use strict";


drawline();

window.onresize = drawline; 

function drawline() {

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //rec
context.fillStyle = "lightgreen";
context.fillRect(500, 50, 200, 200);


//rec2
context.fillRect(300, 200, 600,200);



//rec3
context.fillRect( 300, 600, 600, 200);

  } 
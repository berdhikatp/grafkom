var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width= innerWidth;
myCanvas.height = innerHeight

//gelas 1 berdha
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(165,180,30,50);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(100,200,160,50);
//badan gelas
context.fillStyle = "blue";
context.fillRect(100,240,160,200);
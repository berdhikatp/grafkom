var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width= innerWidth;
myCanvas.height = innerHeight

//gelas 1
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(165,180,30,50);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(100,200,160,50);
//badan gelas
context.fillStyle = "blue";
context.fillRect(100,240,160,200);




//gelas 2
//pegangan tutup gelas
context.strokeStyle = "blue";
context.strokeRect(365,180,30,20);
//tutup gelas
context.strokeStyle = "black";
context.strokeRect(300,200,160,41);
//badan gelas
context.fillStyle = "blue";
context.fillRect(300,240,160,200);



//gelas 3
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(565,180,30,50);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(500,200,160,50);
//badan gelas
context.fillStyle = "blue";
context.fillRect(500,240,160,200);


//rotasi tutup gelas
context.rotate ((Math.PI/180)*40);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(335,-149,160,41);
//peganga
context.fillStyle = "blue";
context.fillRect(395,-178,25,30);

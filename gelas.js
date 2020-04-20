var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width= innerWidth;
myCanvas.height = innerHeight

//gelas 1 berdha
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(285,320,30,50);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(220,340,160,50);
//badan gelas
context.fillStyle = "blue";
context.fillRect(220,380,160,200);


//gelas 2 martafairuss
//pegangan tutup gelas
context.strokeStyle = "blue";
context.strokeRect(695,320,30,20);
//tutup gelas
context.strokeStyle = "black";
context.strokeRect(630,340,160,41);
//badan gelas
context.fillStyle = "blue";
context.fillRect(630,382,160,200);

//rotasi tutup gelas
context.rotate ((Math.PI/180)*40);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(689,-257,160,41);
//pegangan
context.fillStyle = "blue";
context.fillRect(755,-278,30,22);

//gelas 3 linda ready
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(565,180,30,50);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(500,200,160,50);
//badan gelas
context.fillStyle = "blue";
context.fillRect(500,240,160,200);
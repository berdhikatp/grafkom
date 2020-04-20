var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = innerWidth;
myCanvas.height = innerHeight;


//teks arum 
context.font = 'bold 15pt comic';
context.lineWidth = 3;
context.fillStyle = 'black';
context.textBaseline = 'middle';
context.fillText('Gelas Tertutup', 110, 480);
context.font = 'bold 30pt comic';
context.fillStyle = 'black';
context.fillText('Grafika Komputer', 550, 50);
context.font = 'bold 20pt comic';
context.fillStyle = 'black';
context.fillText('Membuat Gelas Terbuka dan Tertutup', 480, 90);
context.font = 'bold 15pt comic';
context.fillStyle = 'black';
context.fillText('Gelas 1/2 Terbuka', 300, 480);


//gelas 1 berdha
//pegangan tutup gelas
context.fillStyle = "blue";
context.fillRect(165, 180, 30, 100);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(100, 200, 160, 100);
//badan gelas
context.fillStyle = "blue";
context.fillRect(100, 240, 160, 200);


//gelas 2 martafairuss
//pegangan tutup gelas
context.strokeStyle = "blue";
context.strokeRect(365, 180, 30, 20);
//tutup gelas
context.strokeStyle = "black";
context.strokeRect(300, 200, 160, 41);
//badan gelas
context.fillStyle = "blue";
context.fillRect(300, 240, 160, 200);

//rotasi tutup gelas
context.rotate((Math.PI / 180) * 40);
//tutup gelas
context.fillStyle = "lightblue";
context.fillRect(335, -149, 160, 41);
//pegangan
context.fillStyle = "blue";
context.fillRect(395, -178, 25, 30);

//update

var x = myCanvas.width / 2;
var y = myCanvas.height / 2;


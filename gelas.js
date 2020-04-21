var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = innerWidth;
myCanvas.height = innerHeight;


//teks arum sipp
context.font = 'bold 15pt comic';
context.lineWidth = 3;
context.fillStyle = 'black';
context.textBaseline = 'middle';
context.fillText('Gelas Tertutup', 235, 650);
context.font = 'bold 30pt comic';
context.fillStyle = 'black';
context.fillText('Grafika Komputer', 550, 80);
context.font = 'bold 20pt comic';
context.fillStyle = 'black';
context.fillText('Membuat Gelas Terbuka dan Tertutup', 480, 130);
context.font = 'bold 15pt comic';
context.fillStyle = 'black';
context.fillText('Gelas 1/2 Terbuka', 635, 650);
context.font = 'bold 15pt comic';
context.fillStyle = 'black';
context.fillText('Gelas Terbuka', 1055, 650);


//gelas 1 berdha
//pegangan tutup gelas
context.fillStyle = "salmon";
context.fillRect(285, 320, 30, 50);
//tutup gelas
context.fillStyle = "#FFB6C1";
context.fillRect(220, 340, 160, 50);
//badan gelas
context.fillStyle = "salmon";
context.fillRect(220, 380, 160, 200);


//gelas 2 martafairuss
//pegangan tutup gelas
context.strokeStyle = "salmon";
context.strokeRect(695, 320, 30, 20);
//tutup gelas
context.strokeStyle = "black";
context.strokeRect(630, 340, 160, 41);
//badan gelas
context.fillStyle = "salmon";
context.fillRect(630, 382, 160, 200);

//gelas 3 linda readyy dan berdha 
//badan gelas
context.fillStyle = "salmon";
context.fillRect(1040, 390, 160, 200);


//rotasi tutup gelas2
context.rotate((Math.PI / 180) * 40);
//tutup gelas
context.fillStyle = "#FFB6C1";
context.fillRect(689, -257, 160, 41);
//pegangan
context.fillStyle = "salmon";
context.fillRect(755, -278, 30, 22);

//rotate tutup gelas 3 berdha
//pegangan tutup gelas
context.fillStyle = "salmon";
context.fillRect(1110, -551, 30, 20);
//tutup gelas
context.translate(600, -860);
context.rotate ((Math.PI / 180) * 48);
context.fillStyle = "#FFB6C1";
context.fillRect(509, -164, 160, 50);

//lanjutan text

var x = myCanvas.width / 2;
var y = myCanvas.height / 2;







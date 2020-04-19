var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');

myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;


context.beginPath();
context.moveTo(80, 160);
context.lineTo(80, 130);
context.lineTo(250, 130);
context.lineTo(250, 160);
context.closePath();
context.lineWidth = 2;
context.strokeStyle='black';
context.fillStyle ='#0095dd';
context.fill();
context.stroke();

context.beginPath();
context.moveTo(80, 160);
context.lineTo(250, 160);
context.lineTo(250, 390);
context.lineTo(80, 390);
context.closePath();
context.lineWidth = 2;
context.strokeStyle='black';
context.fillStyle = '#0095dd';
context.fill();
context.stroke();


context.beginPath();
context.moveTo(150, 130);
context.lineTo(150, 100);
context.lineTo(175, 100);
context.lineTo(175, 130);
context.closePath();
context.lineWidth = 2;
context.strokeStyle='black';
context.fillStyle ='#0095dd';
context.fill();
context.stroke();


//gelas 3

context.beginPath();
context.rotate ((Math.PI/180)*25);
context.moveTo(80, 160);
context.lineTo(80, 130);
context.lineTo(250, 130);
context.lineTo(250, 160);
context.closePath();
context.lineWidth = 2;
context.strokeStyle='black';
context.fillStyle ='#0095dd';
context.fill();
context.stroke();

context.beginPath();
context.moveTo(80, 160);
context.lineTo(250, 160);
context.lineTo(250, 390);
context.lineTo(80, 390);
context.closePath();
context.lineWidth = 2;
context.strokeStyle='black';
context.fillStyle = '#0095dd';
context.fill();
context.stroke();
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(100, 400);
ctx.quadraticCurveTo(500,400,400, 100);
ctx.strokeStyle = 'orange';
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(100, 400, 20, 0, Math.PI * 2);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.closePath();
















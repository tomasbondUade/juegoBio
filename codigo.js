var c = document.getElementById('arkanoid');
var ctx = c.getContext('2d');

var radio = 10
var x = c.width / 2;
var y = c.height - radio;
var dx = 2;
var dy = -2;

var paddelx = c.width / 2;
var paddely = c.height - 10;
var paddelw = 60;
var paddelh = 12;

var rightMove = false;
var leftMove = false;

var bricksRows = 3;
var bricksCols = 5;
var bricksWidth = 80;
var bricksHeight = 30;
var brickPadding = 12;
var brickOfSetTop = 30;
var brickOfSetLeft = 55;

var score = 0;
var lives = 3;

var bricks = [];

for (let i = 0; i <bricksCols; i++){
    bricks[i] = [];
    for (let j = 0; j <bricksRows; j++){
        bricks[i][j] = {x:0, y:0, drawbricks:true};
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseControler, false);
document.addEventListener("keydown", pause, false);

//apretar botones de costado
function keyDownHandler(e) {
    if(e.keyCode == 37){
        leftMove = true;
    } else {
        if(e.keyCode == 39){
            rightMove = true;
        }
    }
}
function keyUpHandler(e){
    if(e.keyCode == 37){
        leftMove = false;
    } else{ 
        if(e.keyCode == 39){
            rightMove = false;
        }
    }
}

//mover con el mouse
function mouseControler(e) {
    var mouseRelativeX = e.clientX - c.offsetLeft;
    if(mouseRelativeX > 0 && mouseRelativeX < c.width) {
        paddelx = mouseRelativeX - paddelw / 2;
    }

}

//pausa 
function pause(e){
    if (e.keyCode == 27){
        alert("pause")
    }
}

//circulo
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, radio, 0 , 2*Math.PI);
    ctx.fill();
    ctx.closePath();  
}

//plataforma
function drawPadel(){
    ctx.beginPath();
    ctx.rect(paddelx,paddely,paddelw,paddelh);
    ctx.fillstyle = "#0066cc";
    ctx.fill();
    ctx.closePath();  
}

//dibuja bloques
function drawBrick(){
    for (let i = 0; i < bricksCols; i++){
        for (let j = 0; j < bricksRows; j++){
            if (bricks[i][j].drawbricks){
                var bx = (i * (bricksWidth + brickPadding)) + brickOfSetLeft;
                var by = (j * (bricksHeight + brickPadding) + brickOfSetTop);
                bricks[i][j].x = bx;
                bricks[i][j].y = by;
                ctx.rect(bx,by,bricksWidth,bricksHeight);
                ctx.fillstyle = "#0066cc";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
//detecta cuando la pelota toca un ladrillo
function detectHits(){
    for (let i = 0; i <bricksCols; i++){
        for (let j = 0; j <bricksRows; j++){
            var brick = bricks[i][j];
            if (bricks[i][j].drawbricks){
                if(x > brick.x && x < brick.x + bricksWidth && y > brick.y && y < brick.y + bricksHeight){
                    dy = -dy;
                    brick.drawbricks = false;
                    score += 1;
                    if(score == bricksCols*bricksRows){
                        alert("ganaste papi...");
                    }
                }
            }
        }
    }
}

function drawScore(){
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10,20);
}

function drawLives(){
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, c.width-80,20);
}

//dibuja todo moviendose
function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    drawBall(); 
    drawPadel();
    drawBrick();
    detectHits();
    drawScore();
    drawLives();
    if(x + dx > c.width - radio || x + dx < radio){
        dx = -dx;
    }

    if(y + dy < radio){
        dy = -dy;
    }else{
        if( y + dy > c.height - radio){
            if (x > paddelx && x < paddelx + paddelw){
                dy = -dy;
            }else{
                lives = lives - 1;
                if(lives <= 0){
                    alert("perdiste papi");
                }
                else{
                    x = c.width / 2;
                    y = c.height - radio;
                    dx = 2;
                    dy = -2;
                    paddelx = c.width / 2;
                }
            }
        }
    }

    if(leftMove && paddelx > 0){
        paddelx -= 8;
    }
    if(rightMove && paddelx < c.width - paddelw){
        paddelx += 8;
    }
    x += dx;
    y += dy;
}

setInterval(draw,10);
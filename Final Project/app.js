var myBackground;
var myGameArea;
var myGamePiece;
var platform1;
var platform2;
var bottle;


function startGame() {
  myGamePiece = new component(30, 30, "#", 10, 120, "image");
  myBackground = new component(656, 270, "#", 0, 0, "Assets/background.png");
  myGameArea.start();
}

function move(dir) {
    myGamePiece.image.src = "#";
    if (dir == "up") {myGamePiece.speedY = -1; }
    if (dir == "down") {myGamePiece.speedY = 1; }
    if (dir == "left") {myGamePiece.speedX = -1; }
    if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
    myGamePiece.image.src = "#";
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function addPlatform() {
platform1.image.src = "Assets/Platform1.png";
platform2.image.src = "Assets/Platform2.png";
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.newPos(); 
    myBackground.update();
    myGamePiece.newPos(); 
    myGamePiece.update();
}




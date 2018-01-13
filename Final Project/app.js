//because setInterval is old and lame
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//Canvas
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,
      velX: 0,
      velY: 0
    },
    keys = [];
 
canvas.width = width;
canvas.height = height;
 
// draw a small red box, which will eventually become our player. Will eventually replace with a sprite. Maybe. 
function update(){
    // draw our player
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    // run through the loop again
    requestAnimationFrame(update);
}
//this is important don't delete it you idiot 
window.addEventListener("load", function(){
  update();
});

//yay keyboard events!! #BestComments #BestCoder
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});








//because setInterval is old and lame
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5
    };
 
canvas.width = width;
canvas.height = height;
 
// draw a small red box, which will eventually become our player.
function update(){
    // draw our player
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    // run through the loop again
    requestAnimationFrame(update);
}

window.addEventListener("load", function(){
  update();
});


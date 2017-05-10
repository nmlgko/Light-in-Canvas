var canvas = document.querySelector( "#light" );
var ctx = canvas.getContext( "2d" );

ctx.fillStyle = "#ccc";
ctx.fillRect( 0, 0, 70, 190 );

function drawCircle( x, y, color ) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc( x, y, 25, 0, 2 * Math.PI, false );
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#444";
    ctx.stroke();
}
function clearCircle( x, y ){
    ctx.fillStyle = "#ccc";
    drawCircle( x, y );
}

drawCircle( 35, 35, "red" );
drawCircle( 35, 95, "yellow" );
drawCircle( 35, 155, "green" );





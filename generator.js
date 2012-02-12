$(function(){

	//canvas
	var canvas = document.getElementById("canvas");
 	var ctx = canvas.getContext('2d');
	var x, y, r, g, b, opacity = opacity || .8;

	canvas.width = 500;
	canvas.height = 500;
	
	ctx.fillStyle = '#cacaca';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
         
 	for (x = 0; x < canvas.width; x++) {
		for (y = 0; y < canvas.height; y++) {
			number = Math.floor( Math.random() * 256 );
			ctx.fillStyle = 'rgba(' + number + ',' + number + ',' + number + ',' + opacity + ')';
			ctx.fillRect(x, y, 1, 1);
 		}
 	}

 	var canvasb = document.getElementById("canvas-b");
 	var ctxb = canvasb.getContext('2d');
	ctxb.moveTo(100, 150);
    ctxb.lineTo(450, 50);
    ctxb.stroke();


});

$(function(){

	//canvas
	generateNoise("canvas");
	generateNoise("canvas-b");
	generateEmpty("canvas-c");

	blendTest();

	function generateNoise(canvasId) {
		
		//canvas
		var canvas = document.getElementById(canvasId);
	 	var ctx = canvas.getContext('2d');
		var x, y, r, g, b, opacity = opacity || 1.0;

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

	}

	function generateEmpty(canvasId) {
		//canvas
		var canvas = document.getElementById(canvasId);
	 	var ctx = canvas.getContext('2d');
		var x, y, r, g, b, opacity = opacity || 1.0;

		canvas.width = 500;
		canvas.height = 500;
		
		ctx.fillStyle = '#cacaca';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	         
	 	for (x = 0; x < canvas.width; x++) {
			for (y = 0; y < canvas.height; y++) {
				number = Math.floor( Math.random() * 256 );
				ctx.fillStyle = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + opacity + ')';
				ctx.fillRect(x, y, 1, 1);
	 		}
	 	}
	 }

	function blendTest() {

		var imageBottom = document.getElementById('canvas');
		var imageTop = document.getElementById('canvas-b');
		
		var imageFinal = document.getElementById("canvas-c");

		ctxBottom = imageBottom.getContext('2d');
		ctxTop = imageTop.getContext('2d');
		ctxFinal = imageFinal.getContext('2d');
		
		// Get the CanvasPixelArray from the given coordinates.
	    imgBottomData = ctxBottom.getImageData(0, 0, imageBottom.width, imageBottom.height);
		imgTopData 	  = ctxTop.getImageData(0, 0, imageTop.width, imageTop.height);
		imgFinalData  = ctxFinal.getImageData(0, 0, imageFinal.width, imageFinal.height);
		
		
	    for (var i = 0, n = imgBottomData.data.length; i < n; i += 4) {
	        imgFinalData.data[i  ] = imgBottomData.data[i  ] * imgTopData.data[i  ] / 255.0; //red
	        imgFinalData.data[i+1] = imgBottomData.data[i+1] * imgTopData.data[i+1] / 255.0; //green
	        imgFinalData.data[i+2] = imgBottomData.data[i+2] * imgTopData.data[i+2] / 255.0; //blue
	        // pix[i+3] is alpha channel (ignored)
	    }


	    /*
	    for (var i = 0, n = imgBottomData.data.length; i < n; i += 4) {
	        imgFinalData.data[i  ] = 255 - imgBottomData.data[i  ]; //red
	        imgFinalData.data[i+1] = 255 - imgBottomData.data[i+1]; //green
	        imgFinalData.data[i+2] = 255 - imgBottomData.data[i+2]; //blue
	        // pix[i+3] is alpha channel (ignored)
	    }
	   */

	    // Draw the result on the canvas
	    ctxFinal.putImageData(imgFinalData, 0, 0);	
	};

});

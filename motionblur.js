$(function(){

	// constructor
	function motionBlur(angle, falloff, distance, wrapEdges, rotation) {

		this.angle     = angle     || 0;
		this.falloff   = falloff   || 1;
		this.distance  = distance  || 1;
		this.wrapEdges = wrapEdges || false;
		this.rotation  = rotation  || 0;
		
	};

	motionBlur.prototype.filter = function(src, dst) {
		var width, height, inPixels, outPixels, 
			sinAngle, cosAngle, total, cx, cy, 
			index, imageRadius, translateX, 
			translateY, maxDistance, repetitions,
			t, p;

		width = src.width;
		height = src.height;

		inPixels = src.getImageData(0, 0, width, height);
		console.log(inPixels);

		sinAngle = Math.sin(this.angle);
		cosAngle = Math.cos(this.angle);

		cx = width/2;
		cy = height/2;
		index = 0;

		imageRadius = Math.sqrt( cx*cx + cy*cy );
		translateX = this.distance * Math.cos( this.angle );
		translateY = this.distance * -Math.sin( this.angle );
		maxDistance = this.distance + Math.abs(this.rotation*imageRadius) + imageRadius;	
		repetitions = maxDistance;

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				var a = 0; var r = 0; var g = 0; var b = 0;
				var count = 0;

				for (var i = 0; i < repetitions; i++) {
					var newX = x; var newY = y;
					var f = i/repetitions;

					p.x = x;
					p.y = y;



				};

			};
		};

	};

	// var test = new motionBlur();
	// test.filter(1, 1, 1, true, false);

});
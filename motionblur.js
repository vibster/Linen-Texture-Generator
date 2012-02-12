$(function(){

	// constructor
	motionBlur = function(options) {

		this.angle     = options.angle     || 0;
		this.falloff   = options.falloff   || 1;
		this.distance  = options.distance  || 1;
		this.wrapEdges = options.wrapEdges || false;
		
	};

	motionBlur.prototype.filter = function(src, dst) {
		
	};

});
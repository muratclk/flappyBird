function Bird() {
	this.y=height/2;
	this.x=64;
	this.gravity = 0.7;
	this.lift = -20;
	this.highlight = false;
	this.velocity = 0;
	this.show= function () {
	fill(255);
	if(this.highlight){
		
			fill(255 , 0 , 0);
			
	}
	ellipse(this.x,this.y,32,32);
	}
	this.update = function () {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		if(this.highlight){
			fill(255 , 0 , 0);
		}
		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
	
		if(this.y < 0 ){
			this.y = 0;
		}
	}

	this.up = function () {
			this.velocity += this.lift ;
	}
	this.hits= function () {
		if(bird.y +15 > 600){
			this.highlight= true;
			console.log("bird hits")
			return true;
		}
	}


}
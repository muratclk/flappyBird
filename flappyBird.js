var bird;
var time =0;
var pipes = [];
var start = false;
var released = true;
var startAgain = false;
var totalScore; 
function setup() {
	//createCanvas(400,600);
	var cnv = createCanvas(400, 600);
  	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) / 2;
  cnv.position(x, y);
	bird = new Bird();
	pipes.push(new Pipe());
	totalScore = 0;
	textSize(40);
	console.log(totalScore + "from draw");
	fill(0, 255, 255);
	text(totalScore,350,50);
}

function draw() {
	background(0);



	bird.show();
	if(pipes.length > 0){
		for (var i = 0; i < pipes.length; i++) {
			pipes[i].show();
		}
		
	}

	textSize(40);
	console.log(totalScore + "from draw");
	fill(0, 255, 255);
	text(totalScore,350,50);

	if(start == false ){
		return ;
	}
	bird.update();

	for (var i = pipes.length-1; i >=0 ; i--) {
		pipes[i].show();
		pipes[i].update();

	textSize(40);
	console.log(totalScore + "from draw");
	fill(0, 255, 255);
	text(totalScore,350,50);
		if(pipes[i].hits(bird) || bird.hits()){
			
			start=false;
			startAgain = true;

			return ;
		}
		totalScore = pipes[i].crossed(bird,totalScore);
			
		
		if(pipes[i].offscreen()){
			pipes.splice(i,1);
		}
	}

		


	if((frameCount - time) % 80 == 0 ){
	 
		if(start == true ) {
	 	pipes.push(new Pipe());	
	 	console.log("pipes pushed")
	 }
	}

	

}

function keyPressed() {
	if(key == ' '){
		bird.up();
		if(start == false){
			if(startAgain == true){

				startAgain = false;
				pipes.splice(0,pipes.length);
				setup();
				return; 
			}

			start = true;
			time = frameCount;

		}

	}
}

function mouseReleased(){
	released = true;
	return false;
}


function touchStarted() {
        if(!released){
			return;
		}
		released = false;



		bird.up();
		if(start == false){
			if(startAgain == true){

				startAgain = false;
				pipes.splice(0,pipes.length);
				setup();
				return; 
			}

			start = true;
			time = frameCount;

		}

	
}
let mic;
function preload(){
	xiao= loadSound("xiao.mp3");
	ku = loadSound("ku.mp3");
}

function setup() {
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
	hao = new SongClass(xiao)
	huai = new SongClass(ku)

	 background(200);

}

function draw() {
	background(255)

	let vol = mic.getLevel();


  let h = map(vol, 0, 1, 0, height);


	emoji(300,300,h);
	m=biaoqing(150,300,1)

	n=biaoqing(450,300,-1)


}

function emoji(x,y,t){
	fill('#FFE24D');
	circle(x,y,t);
	fill('white');
	stroke(0);
	strokeWeight(2);
	circle(x-0.244*t,y-0.155*t,0.22*t);
	circle(x+0.244*t,y-0.155*t,0.22*t);

		
	fill('black');
	circle(x-0.244*t,y-0.177*t,0.133*t);
	circle(x+0.244*t,y-0.177*t,0.133*t);
}

function biaoqing(x,y,t){
	fill('#FFE24D');
	circle(x,y,90);
	fill('white');
	stroke(0);
	strokeWeight(2);
	circle(x-22,y-14,20);
	circle(x+22,y-14,20);
	fill('black');
	circle(x-22,y-10,12);
	circle(x+22,y-10,12);
	

	noFill();
	stroke(0);
	strokeWeight(2);
	if(t==1){
		
	arc(x,y+45,60,60,3.66,5.75,OPEN);}
	if(t==-1){
	arc(x,y,60,60,0.28,2.86,OPEN);}
}

class SongClass {
	constructor(ASong) {
	  this.Song = ASong;
	}
	
	playOn() {
		this.Song.play();
	}
	
	playOff() {
		this.Song.stop();
	}
	CheckSong() {
		if (this.Song.isPlaying()) {
			this.playOff()
		} else {
		  this.playOn()
		}
	}


	
}
function mousePressed() {

	if (mouseX < width/2) {
	    huai.CheckSong()
  }  else {
		  hao.CheckSong()
	}
		

}

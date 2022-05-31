const beachPlane = document.getElementById("beach");
let beachPlaneX = 0;
const roadPlane1 = document.getElementById("road-1");
let roadPlane1X = 0;
const trafficCar = document.getElementById("traffic-car");
let trafficCarX = 640;
const roadPlane2 = document.getElementById("road-2");
let roadPlane2X = 0;
const chiefCar = document.getElementById("chief-car");
let chiefCarSpritesheetImgX = 0;
let chiefCarSpritesheetImgY = 0;
let chiefCarFrame = 0;
const nowPlayingText = document.getElementById("now-playing-text");
let nowPlayingTransparency = 0
let nowPlayingFrame = 0
const static = document.getElementById("static");
const scanlines = document.getElementById("scanlines");
let scanlinesImgX = 0;
let scanlinesImgY = 0;
let scanlinesFrame = 0;
const fps = 60;
const backgroundMusic = document.createElement("audio");
function displayScreenErrorMessage() {
	errorBody = document.createElement("div");
	errorBody.style.width = "100%";
	errorBody.style.height = "100%";
	errorBody.style.backgroundColor = "#F00";
}
function start() {
	const startScreen = document.getElementsByClassName("start")[0];
	startScreen.style.display = "none";
	setInterval(mainLoop, 1000 / fps);
	backgroundMusic.src = "meatDreams.wav";
	backgroundMusic.setAttribute("preload", "auto");
	backgroundMusic.setAttribute("controls", "none");
	backgroundMusic.setAttribute("loop", "loop");
	backgroundMusic.style.display = "none";
}
function mainLoop() {
	if (window.innerWidth < window.innerHeight) {
		document.getElementsByClassName("screen-error-message")[0].style.fontSize = "5vw";
	} else {
		document.getElementsByClassName("screen-error-message")[0].style.fontSize = "5vh";
	}
	if (window.innerWidth < 640 || window.innerHeight < 480) {
		document.getElementsByClassName("game")[0].style.display = "none";
		clearInterval(mainLoop);
		backgroundMusic.pause();
		document.getElementsByClassName("screen-error-message")[0].style.display = "block";
	} else {
		document.getElementsByClassName("screen-error-message")[0].style.display = "none";
		document.getElementsByClassName("game")[0].style.display = "block";
		backgroundMusic.play();
		beachPlane.style.left = (0 - beachPlaneX).toString()  + "px";
		roadPlane1.style.left = (0 - roadPlane1X).toString()  + "px";
		trafficCar.style.left = (trafficCarX).toString() + "px";
		roadPlane2.style.left = (0 - roadPlane2X).toString() + "px";
		chiefCar.style.backgroundPosition = (chiefCarSpritesheetImgX).toString() + "px " + (chiefCarSpritesheetImgY).toString() + "px";
		nowPlayingText.style.maskImage = "linear-gradient(rgba(0, 0, 0, " + (nowPlayingTransparency).toString() + "), rgba(0, 0, 0, " + (nowPlayingTransparency).toString() + ")";
		nowPlayingText.style.webkitMaskImage = "linear-gradient(rgba(0, 0, 0, " + (nowPlayingTransparency).toString() + "), rgba(0, 0, 0, " + (nowPlayingTransparency).toString() + ")";
		static.style.backgroundPosition = (Math.floor(Math.random() * 3456)).toString() + "px " + (Math.floor(Math.random() * 3616)).toString() + "px";
		scanlines.style.backgroundPosition = (scanlinesImgX).toString() + "px " + (scanlinesImgY).toString() + "px";
		beachPlaneX += 2;
		beachPlaneX %= 1280;
		roadPlane1X += 13;
		roadPlane1X %= 640;
		roadPlane2X += 20;
		roadPlane2X %= 640;
		chiefCarFrame += 0.27;
		chiefCarFrame %= 4;
		if (Math.floor(chiefCarFrame) == 0) {
			chiefCarSpritesheetImgX = 0;
			chiefCarSpritesheetImgY = 0;
		} else if (Math.floor(chiefCarFrame) == 1) {
			chiefCarSpritesheetImgX = 352;
			chiefCarSpritesheetImgY = 0;
		} else if (Math.floor(chiefCarFrame) == 2) {
			chiefCarSpritesheetImgX = 0;
			chiefCarSpritesheetImgY = 192;
		} else if (Math.floor(chiefCarFrame) == 3) {
			chiefCarSpritesheetImgX = 352;
			chiefCarSpritesheetImgY = 192;
		}
		trafficCarX -= 50;
		if (trafficCarX <= -640) {
			trafficCarX = 640;
		}
		if (trafficCarX  >= 640) {
			trafficCar.style.backgroundImage = "url(car" + (Math.floor(Math.random() * 9) + 1).toString() + ".svg)";
		}
		nowPlayingFrame += 1;
		if (nowPlayingFrame <= 127) {
			nowPlayingTransparency += 0.0078125;
		} else if (nowPlayingFrame <= 767) {
			nowPlayingTransparency -= 0.00390625;
		}
		scanlinesFrame += 0.5;
		scanlinesFrame %= 4;
		if (Math.floor(scanlinesFrame) == 0) {
			scanlinesImgX = 0;
			scanlinesImgY = 0;
		} else if (Math.floor(scanlinesFrame) == 1) {
			scanlinesImgX = 640;
			scanlinesImgY = 0;
		} else if (Math.floor(scanlinesFrame) == 2) {
			scanlinesImgX = 0;
			scanlinesImgY = 480;
		} else if (Math.floor(scanlinesFrame) == 3) {
			scanlinesImgX = 640;
			scanlinesImgY = 480;
		}
	}
}
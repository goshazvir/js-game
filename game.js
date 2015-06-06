window.onload = init;

var map;
var ctxmap;

var pl;
var ctxPl;

var drawBtn;
var clearBtn;

var gameWidth = 800;
var gameHeight = 500;

var background = new Image();
background.src = "img/bg.png";

var tiles = new Image();
tiles.src = "img/tiles.png";

function init () {
	map = document.getElementById('map');
	ctxMap = map.getContext("2d");

	pl = document.getElementById("player");
	ctxPl = pl.getContext("2d");

	map.width = gameWidth;
	map.height = gameHeight;
	pl.width = gameWidth;
	pl.height = gameHeight;

	drawBtn = document.getElementById("drawBtn");
	clearBtn = document.getElementById("clearBtn");

	drawBtn.addEventListener("click", drawRect, false);
	clearBtn.addEventListener("click", clearRect, false);

	drawBg();
	drawPlayer();
}

function drawRect () {
	ctxMap.fillStyle = "#3D3D3D";
	ctxMap.fillRect(10,10,50,50);
}

function clearRect () {
	ctxMap.clearRect(0,0,800,500);
}

function drawBg() {
	ctxMap.drawImage(background, 0, 0, 800, 500,
		0, 0, gameWidth, gameHeight);
}

function drawPlayer () {
	ctxMap.drawImage(tiles, 0, 0, 120, 70,
		0, 0, 120, 70);
}


// Create the application
const app = new PIXI.Application({
	backgroundColor: 0xFFFFFF,
	width: 922,
	height: 496
});

// Add the view to the DOM
document.body.appendChild(app.view);

const request = new XMLHttpRequest();
request.open("GET", "italy.svg", true);
request.onreadystatechange = () => {
	if (request.readyState === 4) {
		const svg = request.responseXML;
		const graphics = new SVGGraphics(svg);
		//graphics.scale.set(1, 1);
		app.stage.addChild(graphics);
	}
};
request.send(null);
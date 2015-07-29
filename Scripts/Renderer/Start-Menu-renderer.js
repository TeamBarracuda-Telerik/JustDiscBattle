// Last Modified by Tectonik
// Change this name with yours when you modify the file


// NOTE= Darker and blurred background
// TODO = Difficulty buttons/slider
// FIXED = Start doesn't work in tut mode. Use exit and back buttons as a workaround

/* global Kinetic */
/* global startGame */
/* global runTimer */

var stage = new Kinetic.Stage({
		container: 'start-menu-container',
		width: 640,
		height: 440
	}),
	svgAndCanvasContainer = document.getElementsByClassName('gameDisplayContainer')[0],
	stageHorizontalCenter = stage.getWidth() / 2,
	stageVerticalCenter = stage.getHeight() / 2,
	layer = new Kinetic.Layer(),
	buttonFill = 'purple',
	buttonStroke = 'orange',
	textColor = 'orange',
	svgField = document.getElementById('svg-field');

var startButton = new Kinetic.Rect({
		x: stageHorizontalCenter - 140,
		y: stageVerticalCenter + 150,
		width: 100,
		height: 30,
		stroke: buttonStroke,
		fill: buttonFill
	}).rotate(10),

	startButtonText = new Kinetic.Text({
		x: startButton.getX(),
		y: startButton.getY() + 2,
		text: 'Start',
		fontSize: 24,
		fontFamily: 'Consolas',
		width: startButton.getWidth(),
		align: 'center',
		fill: textColor
	}).rotate(10);

var tutorialButton = new Kinetic.Rect({
		x: stageHorizontalCenter - 130,
		y: stageVerticalCenter - 35,
		width: 100,
		height: 30,
		stroke: buttonStroke,
		fill: buttonFill
	}).rotate(-10),

	tutorialButtonText = new Kinetic.Text({
		x: tutorialButton.getX(),
		y: tutorialButton.getY() + 3,
		text: 'Tutorial',
		fontSize: 21,
		fontFamily: 'Consolas',
		width: tutorialButton.getWidth(),
		align: 'center',
		fill: textColor
	}).rotate(-10);

var creditsButton = new Kinetic.Rect({
		x: (stageHorizontalCenter) + 40,
		y: 170,
		width: 100,
		height: 30,
		stroke: buttonStroke,
		fill: buttonFill
	}).rotate(10),

	creditsButtonText = new Kinetic.Text({
		x: creditsButton.getX(),
		y: creditsButton.getY() + 3,
		text: 'Credits',
		fontSize: 21,
		fontFamily: 'Consolas',
		width: tutorialButton.getWidth(),
		align: 'center',
		fill: textColor
	}).rotate(10);

var exitButton = new Kinetic.Rect({
		x: stageHorizontalCenter + 140,
		y: 370,
		width: 100,
		height: 30,
		stroke: buttonStroke,
		fill: buttonFill
	}).rotate(5),

	exitButtonText = new Kinetic.Text({
		x: exitButton.getX(),
		y: exitButton.getY() + 3,
		text: 'Exit',
		fontSize: 21,
		fontFamily: 'Consolas',
		width: tutorialButton.getWidth(),
		align: 'center',
		fill: textColor
	}).rotate(5);

var tutorialText = new Kinetic.Text({
	x: 140,
	y: 100,
	text: 'Welcome to Just Disc Battle!\n\nA, game inspired by the classic, Air hockey.\n Your objective is to [placeholder] [something about ai opponent]',
	fontSize: 20,
	fontFamily: 'Consolas',
	width: 400,
	align: 'center',
	fill: 'white'
});

var creditsText = new Kinetic.Text({
	x: 140,
	y: 100,
	text: 'Telerik Academy team Barracuda\n\n'
    +'Authors: \n'
    +'M.Yankov - Mihail Yankov\n'
    +'Emiliya93 - Emilia Georghieva\n'
    +'Beardhammer - Martin Ali\n'
    +'Adrian.Apostolov - Adrian Apostolov\n'
    +'A.sideriss - Alexis Sideriss\n'
    +'enchev93 - Georgi Enchev\n'
    +'dlachkov - Dimitar Lachkov\n'
    +'Andrei_pl - Andrey Traykov',
	fontSize: 20,
	fontFamily: 'Consolas',
	width: 400,
	align: 'center',
	fill: 'white'
});

function visualizeExitButton() {
	exitButton.show();
	exitButtonText.show();
}

function visualizeCreditsButton() {
	creditsButton.show();
	creditsButtonText.show();
}

function visualizeTutorialButton() {
	tutorialButton.show();
	tutorialButtonText.show();
}

function visualizeStartButton() {
	startButton.show();
	startButtonText.show();
}

function hideExitButton() {
	exitButton.hide();
	exitButtonText.hide();
}

function hideCreditsButton() {
	creditsButton.hide();
	creditsButtonText.hide();
}

function hideTutorialButton() {
	tutorialButton.hide();
	tutorialButtonText.hide();
}

function hideStartButton() {
	startButton.hide();
	startButtonText.hide();
}

function blur() {
	//FIXME - You know why
	svgAndCanvasContainer.className += ' blurred';
	// attr('class', 'gameDisplayContainer blurred');
}

function unBlur() {
	// FIXME - Find a better way to delete classes
	svgAndCanvasContainer.className = svgAndCanvasContainer.className.replace(/ ?blurred ?/g, '');
}

function hideStartButton() {
	startButton.hide();
	startButtonText.hide();
}

function hidePlayField() {
	svgField.style.visibility = 'hidden';
	// canvasField.style.visibility = 'hidden';
}

function visualizePlayField() {
	svgField.style.visibility = 'visible';
	// canvasField.style.visibility = 'visible';
}

function exitButtonEventHandler() {
	// visualiseStartButton();

	tutorialText.hide();
	visualizeCreditsButton();
	visualizePlayField();
	blur();
	visualizeTutorialButton();
	hideExitButton();
    creditsText.hide();

	layer.draw();
}

function startTheGame() {
	// TODO: Optimize slightly
	// TODO: Fade out animation
	unBlur();
    tutorialText.hide();
    creditsText.hide();
	// document.getElementById('start-menu-container').style.visibility = 'hidden';

	// Theory: removing everything this way is faster, but the line above allows for a pause menu and stuff
	document.getElementById('start-menu-container').outerHTML = '';

	// startGame();
    // engine.startGame();

	// setInterval(runTimer, 1000);
      setInterval(engine.runTimer, 1000);

	visualizePlayField();
	console.log('Start clicked');

	layer.draw();
}

function startTutorial() {
	hideCreditsButton();
	hideTutorialButton();
	visualizeExitButton();
	// hidePlayField();

	tutorialText.show();

	// NOTE - BUG TEMPORARILY GONE --> Calling unBlur() here causes the start button to stop functioning
	unBlur();

	layer.draw();
}

function startCredits() {
	// TODO - Star Wars style credits. No doubt
	hideCreditsButton();
	hideTutorialButton();
	visualizeExitButton();
    creditsText.show();
	// hidePlayField();

	layer.draw();
	console.log('Credits executed');
}

startButton.on('click', startTheGame);
startButtonText.on('click', startTheGame);
tutorialButton.on('click', startTutorial);
tutorialButtonText.on('click', startTutorial);
creditsButton.on('click', startCredits);
creditsButtonText.on('click', startCredits);
exitButton.on('click', exitButtonEventHandler);
exitButtonText.on('click', exitButtonEventHandler);

hideExitButton();
tutorialText.hide();
creditsText.hide();

layer.add(startButton);
layer.add(tutorialButton);
layer.add(startButtonText);
layer.add(tutorialButtonText);
layer.add(creditsButton);
layer.add(creditsButtonText);
layer.add(exitButton);
layer.add(exitButtonText);
layer.add(tutorialText);
layer.add(creditsText);
stage.add(layer);

// startTutorial();

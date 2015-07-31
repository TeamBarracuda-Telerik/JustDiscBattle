define(["engine"],function (engine) {
    /* global Kinetic */
    var StartMenu = (function () {
        function StartMenu() {
        }

        StartMenu.prototype.draw = function () {
            /* global Kinetic */

            var stage = new Kinetic.Stage({
                    container : 'start-menu-container',
                    width     : 640,
                    height    : 440
                }),

                svgAndCanvasContainer = document.getElementsByClassName('gameDisplayContainer')[0],
                stageHorizontalCenter = stage.getWidth() / 2,
                stageVerticalCenter   = stage.getHeight() / 2,
                layer                 = new Kinetic.Layer(),
                buttonFill            = 'purple',
                buttonStroke          = 'orange',
                textColor             = 'orange',
                svgField              = document.getElementById('svg-field');

            var startButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter - 140,
                    y      : stageVerticalCenter + 50,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }).rotate(10),
                startButtonText = new Kinetic.Text({
                    x          : startButton.getX(),
                    y          : startButton.getY() + 2,
                    text       : 'Start',
                    fontSize   : 24,
                    fontFamily : 'Consolas',
                    width      : startButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                }).rotate(10);

            var tutorialButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter - 130,
                    y      : stageVerticalCenter - 95,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }).rotate(-10),

                tutorialButtonText = new Kinetic.Text({
                    x          : tutorialButton.getX(),
                    y          : tutorialButton.getY() + 3,
                    text       : 'Tutorial',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                }).rotate(-10);

            var creditsButton      = new Kinetic.Rect({
                    x      : stageHorizontalCenter + 40,
                    y      : stageVerticalCenter - 110,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }).rotate(10) ,

                creditsButtonText  = new Kinetic.Text({
                    x          : creditsButton.getX(),
                    y          : creditsButton.getY() + 3,
                    text       : 'Credits',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                }).rotate(10);

            var exitButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter + 140,
                    y      : stageVerticalCenter + 50,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }).rotate(5),

                exitButtonText = new Kinetic.Text({
                    x          : exitButton.getX(),
                    y          : exitButton.getY() + 3,
                    text       : 'Back',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                }).rotate(5);

            var difficultyEasyButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter- 50,
                    y      : stageVerticalCenter - 80,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }),

                difficultyEasyText = new Kinetic.Text({
                    x          : stageHorizontalCenter- 50,
                    y          : stageVerticalCenter - 78,
                    text       : 'Easy',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                });

            var difficultyMediumButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter- 50,
                    y      : stageVerticalCenter - 30,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }),

                difficultyMediumText = new Kinetic.Text({
                    x          : stageHorizontalCenter- 50,
                    y          : stageVerticalCenter -28,
                    text       : 'Medium',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                });

            var difficultyHardButton = new Kinetic.Rect({
                    x      : stageHorizontalCenter - 50,
                    y      : stageVerticalCenter + 20,
                    width  : 100,
                    height : 30,
                    stroke : buttonStroke,
                    fill   : buttonFill
                }),

                difficultyHardText = new Kinetic.Text({
                    x          : stageHorizontalCenter- 50,
                    y          : stageVerticalCenter + 22,
                    text       : 'Hard',
                    fontSize   : 21,
                    fontFamily : 'Consolas',
                    width      : tutorialButton.getWidth(),
                    align      : 'center',
                    fill       : textColor
                });

            var tutorialText = new Kinetic.Text({
                x          : 140,
                y          : 40,
                text       : 'Welcome to Just Disc Battle!\n\n'+
                'A, game inspired by the classic, Air hockey.'+
                '\n Your objective is to beat the ai opponent!'+
                '\n1 point is awarded every time a player enters the puck into the enemy player\'s goal,\n'+
                'the first player that scores 15 points wins. Good luck!',
                fontSize   : 20,
                fontFamily : 'Consolas',
                width      : 400,
                align      : 'center',
                fill       : 'white'
            });

            var creditsText = new Kinetic.Text({
                x          : 140,
                y          : 40,
                text       : 'Telerik Academy team Barracuda\n\n' + 'Authors: \n' + 'M.Yankov - Mihail Yankov\n' + 'Beardhammer - Martin Ali\n' + 'Adrian.Apostolov - Adrian Apostolov\n' + 'A.sideriss - Alexis Sideris\n' + 'enchev93 - Georgi Enchev',
                fontSize   : 20,
                fontFamily : 'Consolas',
                width      : 400,
                align      : 'center',
                fill       : 'white'
            });

            function visualizeDifficultyButtons() {
                difficultyEasyButton.show();
                difficultyEasyText.show();
                difficultyMediumButton.show();
                difficultyMediumText.show();
                difficultyHardButton.show();
                difficultyHardText.show();
            }

            function hideDifficultyButtons() {
                difficultyEasyButton.hide();
                difficultyEasyText.hide();
                difficultyMediumButton.hide();
                difficultyMediumText.hide();
                difficultyHardButton.hide();
                difficultyHardText.hide();
            }

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
                visualizeStartButton();
                hideDifficultyButtons();
                tutorialText.hide();
                visualizeCreditsButton();
                visualizePlayField();
                blur();
                visualizeTutorialButton();
                hideExitButton();
                creditsText.hide();

                layer.draw();
            }


            function selectDifficulty() {
                // TODO - Optimize slightly
                // TODO - Fade out animation
                blur();
                visualizeDifficultyButtons();
                hideStartButton();
                tutorialText.hide();
                creditsText.hide();
                hideCreditsButton();
                hideTutorialButton();
                visualizeExitButton();

                // TODO: "Back" button needs a new position when in difficulty screen
                // document.getElementById('start-menu-container').style.visibility = 'hidden';
                // Theory: removing everything this way is faster, but the line above allows for a pause menu and stuff
                // document.getElementById('start-menu-container').outerHTML = '';
                // engine.startGame();


                // visualizePlayField();

                layer.draw();
            }

            function startTutorial() {
                hideCreditsButton();
                hideTutorialButton();
                visualizeExitButton();
                // hidePlayField();

                tutorialText.show();

                // NOTE - BUG TEMPORARILY GONE --> Calling unBlur() here causes the start button to stop functioning

                layer.draw();
            }

            function startCredits() {
                hideCreditsButton();
                hideTutorialButton();
                visualizeExitButton();
                creditsText.show();
                // hidePlayField();

                layer.draw();
                console.log('Credits executed');
            }

            startButton.on('click', selectDifficulty);
            startButtonText.on('click', selectDifficulty);
            tutorialButton.on('click', startTutorial);
            tutorialButtonText.on('click', startTutorial);
            creditsButton.on('click', startCredits);
            creditsButtonText.on('click', startCredits);
            exitButton.on('click', exitButtonEventHandler);
            exitButtonText.on('click', exitButtonEventHandler);

            function clearStartMenu(){
                svgAndCanvasContainer.className = '';
                var element = document.getElementById('start-menu-container');
                element.className = '';
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                if (element) {
                    element.parentNode.removeChild(element);
                }
            }

            difficultyEasyButton.on('click', function() {
                clearStartMenu();
                engine.startGame();
            });
            difficultyEasyText.on('click', function() {
                clearStartMenu();
                engine.startGame();
            });
            difficultyMediumButton.on('click', function() {
                clearStartMenu();
                engine.startGame();
            });
            difficultyMediumText.on('click', function() {
                clearStartMenu();
                engine.startGame();
            });
            difficultyHardButton.on('click', function(){
                clearStartMenu();
                engine.startGame();
            });
            difficultyHardText.on('click', function(){
                clearStartMenu();
                engine.startGame();
            });


            hideExitButton();
            tutorialText.hide();
            creditsText.hide();
            hideDifficultyButtons();

            layer.add(difficultyEasyButton);
            layer.add(difficultyMediumButton);
            layer.add(difficultyHardButton);

            layer.add(difficultyEasyText);
            layer.add(difficultyMediumText);
            layer.add(difficultyHardText);

            layer.add(startButton);
            layer.add(tutorialButton);
            layer.add(creditsButton);
            layer.add(exitButton);

            layer.add(startButtonText);
            layer.add(tutorialButtonText);
            layer.add(creditsButtonText);
            layer.add(exitButtonText);
            layer.add(tutorialText);
            layer.add(creditsText);
			
            stage.add(layer);
        };

        return StartMenu;
    }());

    return new StartMenu();
});
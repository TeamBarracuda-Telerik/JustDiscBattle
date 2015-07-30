define(["constants"], function (CONSTS) {
    var SvgDrawer = (function (svgNS) {
        var SvgDrawer = Object.create({}),
            black = '#000',
            white = '#fff',
            fontStyle = 'fill: #00ff00; stroke: #fff; stroke-width: 0.5; font-size: 20px';
			

        Object.defineProperties(SvgDrawer, {
			init: {
				value: function (svgNS) {
					this.svgNS = svgNS;
					return this;
				}
			},
            svgNS: {
                get: function () {
                    return this._svgNS;
                },
                set: function (value) {
                    this._svgNS = value;
                }
            },

            drawForms: {
                value: function () {
                    var xOfPcAIScore = (640 - 150).toString(),
                        rectForPlayerSore = document.createElementNS(this.svgNS, 'rect'),
                        pcAISocre = document.createElementNS(this.svgNS, 'rect'),
                        rectForTime = document.createElementNS(this.svgNS, 'rect'),
                        fragment =  document.createDocumentFragment();

                    rectForPlayerSore = setAttributesForRect(rectForPlayerSore, '150', '20', '30', '30', black, white);
                    pcAISocre = setAttributesForRect(pcAISocre, xOfPcAIScore, '20', '30', '30', black, white);
                    rectForTime = setAttributesForRect(rectForTime, '280', '20', '80', '30', black, white);

                    fragment.appendChild(rectForPlayerSore);
                    fragment.appendChild(pcAISocre);
                    fragment.appendChild(rectForTime);
                    document.getElementById('svg-field').appendChild(fragment);
                }
            },

            drawTime: {
                value: function (value) {
                    var textField = document.createElementNS(this.svgNS, 'text'),
                        minutes,
                        seconds;
                    textField.setAttribute('x', '300');
                    textField.setAttribute('y', '40');
                    textField.setAttribute('style', fontStyle);
                    textField.setAttribute('width', '30');
                    textField.setAttribute('height', '30');

                    minutes = (value / 60) | 0;
                    seconds = (value % 60) | 0;

                    if(seconds < 10){
                        seconds = '0' + seconds;
                    }

                    textField.innerHTML = minutes + " : " + seconds;
                    document.getElementById('svg-field').appendChild(textField);
                }
            },
			
			drawNames: {
				value: function (playerName, enemyName) {
					var playerNameField = document.createElementNS(this.svgNS, 'text'),
						enemyNameField = document.createElementNS(this.svgNS, 'text'),
						fontStyleName = 'fill: #00ff00; stroke: #fff; stroke-width: 0.5; font-size: 15px';
						
						playerNameField.setAttribute('x', '150');
						playerNameField.setAttribute('y', '70');
						playerNameField.setAttribute('style', fontStyleName);
						playerNameField.setAttribute('width', '30');
						playerNameField.setAttribute('height', '30');
						playerNameField.innerHTML = playerName;
						
						enemyNameField.setAttribute('x', '475');
						enemyNameField.setAttribute('y', '70');
						enemyNameField.setAttribute('style', fontStyleName);
						enemyNameField.setAttribute('width', '30');
						enemyNameField.setAttribute('height', '30');
						enemyNameField.innerHTML = enemyName;
						
						document.getElementById('svg-field').appendChild(playerNameField);
						document.getElementById('svg-field').appendChild(enemyNameField);
				}
			},

            drawScores: {
                value: function (playerScore, pcAIscore) {
                    var pScore = document.createElementNS(this.svgNS, 'text'),
                        aiScore = document.createElementNS(this.svgNS, 'text'),
                        fragment = document.createDocumentFragment();
                    aiScore = setAttributesForRect(aiScore, '500', '40', '10', '10');
                    aiScore.setAttribute('style', fontStyle);
                    aiScore.innerHTML = pcAIscore;

                    pScore = setAttributesForRect(pScore, '160', '40', '10', '10');
                    pScore.setAttribute('style', fontStyle);
                    pScore.innerHTML = playerScore;

                    fragment.appendChild(pScore);
                    fragment.appendChild(aiScore);

                    document.getElementById('svg-field').appendChild(fragment);
                }
            },

            drawGitHubLogoLink: {
                value:  function (){
                    var link = document.createElementNS(this.svgNS, 'a'),
                        img = '<image xlink:href="./Images/GitHub-Mark-32px.png" x="10" y="10" width="32" height="32" fill="none" stroke="none"></image>';
                    link.setAttributeNS(null, 'x', '0');
                    link.setAttributeNS(null, 'y', '0');
                    link.setAttributeNS(null, 'width', '20');
                    link.setAttributeNS(null, 'height', '20');
                    link.setAttributeNS(null, 'target', '_blank');
                    link.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'https://github.com/TeamBarracuda-Telerik/JustDiscBattle');

                    link.innerHTML = img;
                    document.getElementById('svg-field').appendChild(link);
                }
            },
			
			drawPlayField : {
				value : function() {
				var svgField =  document.getElementById('playField'),
				x = 0,
				y = 0,
				fieldWidth = CONSTS.playfield.width,
				fieldHeight = CONSTS.playfield.height,
				middleFieldWidth = fieldWidth / 2,
                middleFieldHeight = fieldHeight / 2,
                circleRadius = 42;
				
			var leftHalf = document.createElementNS(svgNS, 'rect');
            leftHalf.setAttribute('x', x);
            leftHalf.setAttribute('y', y);
            leftHalf.setAttribute('width', fieldWidth / 2);
            leftHalf.setAttribute('height', fieldHeight);
            leftHalf.setAttribute('fill', '#FF7383');
            leftHalf.setAttribute('stroke', 'black');

            var rightHalf = document.createElementNS(svgNS, 'rect');
            rightHalf.setAttribute('x', fieldWidth / 2);
            rightHalf.setAttribute('y', y);
            rightHalf.setAttribute('width', fieldWidth / 2);
            rightHalf.setAttribute('height', fieldHeight);
            rightHalf.setAttribute('fill', '#99BDFF');
            rightHalf.setAttribute('stroke', 'black');


            var path = document.createElementNS(svgNS, 'path');
            path.setAttribute('stroke-dasharray', '7, 7');
            path.setAttribute('d', 'M ' + middleFieldWidth + ' ' + 0 + ' ' + 'L' + middleFieldWidth + ' ' + fieldHeight);
            path.setAttribute('stroke', 'white');
            path.setAttribute('stroke-width', 3);
            path.setAttribute('fill', 'none');

            svgField.applyAirBlowers = function (airBlowers) {
                var fragment = document.createDocumentFragment();
                airBlowers.map(function (airblower) {
                    fragment.appendChild(airblower);
                });

                svgField.appendChild(fragment);
            };

            function createCircleInMiddle(radius, fillColor) {
                var circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', middleFieldWidth);
                circle.setAttribute('cy', middleFieldHeight);
                circle.setAttribute('r', radius);
                circle.setAttribute('stroke', 'black');
                circle.setAttribute('fill', fillColor);

                return circle;
            }

            function strokedLine(x) {
                var path = document.createElementNS(svgNS, 'path');
                path.setAttribute('d', 'M ' + x + ' ' + 0 + ' ' + 'L' + x + ' ' + fieldHeight);
                path.setAttribute('stroke', 'black');
                path.setAttribute('stroke-width', 4);

                return path;
            }

            function createAirBlowers(fieldWidth, fieldHeight) {
                var width = fieldWidth,
                    height = fieldHeight,
                    airBlowerRadius = 1.7,
                    airBlowers = [];

                for (var y = 40; y <= height - 40; y += 40) {
                    for (var x = 40; x <= width - 40; x += 40) {
                        var circle = document.createElementNS(svgNS, 'circle');
                        circle.setAttribute('cx', x);
                        circle.setAttribute('cy', y);
                        circle.setAttribute('r', airBlowerRadius);
                        circle.setAttribute('stroke', 'black');
                        circle.setAttribute('fill', 'white');

                        if (x < (width / 2) - 40 || x > (width / 2) + 40) {
                            airBlowers.push(circle);
                        }
                    }
                }

                return airBlowers;
            }

            function createHumanPlayerDoor(fieldWidth, fieldHeight) {
                var humanArchDoor = document.createElementNS(svgNS, 'path'),
                    doorheight = (fieldHeight / 3) | 0,
                    startDoorY = (fieldHeight / 2) - (doorheight / 2),
                    endDoorY = (fieldHeight / 2) + (doorheight / 2);

                humanArchDoor.setAttribute('d', 'M ' + 0 + ' ' + startDoorY + ' A ' + 400 + ' ' + 210 + ' 0 0 1 ' + 0 + ' ' + endDoorY);
                humanArchDoor.setAttribute('stroke', 'black');
                humanArchDoor.setAttribute('fill', 'white');

                return humanArchDoor
            }

            function createEnemyPlayerDoor(fieldWidth, fieldHeight) {
                var enemyArchDoor = document.createElementNS(svgNS, 'path'),
                    doorheight = (fieldHeight / 3) | 0,
                    startDoorY = (fieldHeight / 2) - (doorheight / 2),
                    endDoorY = (fieldHeight / 2) + (doorheight / 2);

                enemyArchDoor.setAttribute('d', 'M ' + fieldWidth + ' ' + startDoorY + ' ' + ' A ' + 400 + ' ' + 210 + ' 0 0 0 ' + fieldWidth + ' ' + endDoorY);
                enemyArchDoor.setAttribute('stroke', 'black');
                enemyArchDoor.setAttribute('fill', 'white');

                return enemyArchDoor;
            }


            var humanDoor = createHumanPlayerDoor(fieldWidth, fieldHeight),
                enemyDoor = createEnemyPlayerDoor(fieldWidth, fieldHeight),
                airBlowers = createAirBlowers(fieldWidth, fieldHeight),
                innerCircle = createCircleInMiddle((circleRadius - 15), '#454545'),
                outerCircle = createCircleInMiddle(circleRadius, 'white'),
                leftLine = strokedLine(0),
                rightLine = strokedLine(fieldWidth);

            var fragment = document.createDocumentFragment();
            fragment.appendChild(leftHalf);
            fragment.appendChild(rightHalf);
            fragment.appendChild(path);
            fragment.appendChild(outerCircle);
            fragment.appendChild(innerCircle);
            fragment.appendChild(humanDoor);
            fragment.appendChild(enemyDoor);
            fragment.appendChild(leftLine);
            fragment.appendChild(rightLine);
            svgField.appendChild(fragment);
            svgField.applyAirBlowers(airBlowers);
        
			document.getElementById('playField').style.cursor = "none";
			document.getElementById('canvas-field').style.cursor = "none";
					//var playfield = new PlayField('playField', 0, 0, CONSTS.playfield.width, CONSTS.playfield.height);
				}
			},
			// TODO : beautify
			drawWin : {
			    value: function (text) {
					var endGameField = document.createElementNS(this.svgNS, 'text'),
						fontStyle = 'fill: #00ff00; stroke: #fff; stroke-width: 0.5; font-size: 50px';

						endGameField.setAttribute('x', '230');
						endGameField.setAttribute('y', '100');
						endGameField.setAttribute('style', fontStyle);
						endGameField.setAttribute('width', '30');
						endGameField.setAttribute('height', '30');
						endGameField.innerHTML = text;

					document.getElementById('playField').appendChild(endGameField);
				}
			},
			
			drawGameOver : {
			    value: function (text) {
					var endGameField = document.createElementNS(this.svgNS, 'text'),
						fontStyle = 'fill: #00ff00; stroke: #fff; stroke-width: 0.5; font-size: 50px';

						endGameField.setAttribute('x', '195');
						endGameField.setAttribute('y', '100');
						endGameField.setAttribute('style', fontStyle);
						endGameField.setAttribute('width', '30');
						endGameField.setAttribute('height', '30');
						endGameField.innerHTML = text;

					document.getElementById('playField').appendChild(endGameField);
				}
			},

            clear: {
                value: function () {
                    var children = document.getElementById('svg-field').childNodes,
                        i;

                    for (i = 0; i < children.length;) {
                        if(children[i].id != undefined && children[i].id === 'no_Delete'){
                            //skip and delete others
                            i += 1
                        } else {
                            var p = children[i].parentNode;
                            p.removeChild(children[i]);
                            //children[i].remove();
                        }
                    }
                }
            }
        });

        /**
         * @param {object} object
         * @param {string} x
         * @param {string} y
         * @param {string} width
         * @param {string} height
         * @param {string} [fillColor]
         * @param {string} [strokeColor]
         * @returns {object}
         */
        function setAttributesForRect(object, x, y, width, height, fillColor , strokeColor) {
            object.setAttribute('x', x);
            object.setAttribute('y', y);
            object.setAttribute('width', width);
            object.setAttribute('height', height);

            if(fillColor != undefined){

                object.setAttribute('fill', fillColor);
            }

            if(strokeColor != undefined){

                object.setAttribute('stroke', strokeColor);
            }

            return object;
        }

        return SvgDrawer.init('http://www.w3.org/2000/svg');
    }('http://www.w3.org/2000/svg'));

    return SvgDrawer;
});
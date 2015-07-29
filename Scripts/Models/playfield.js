define(function () {
    var Playfield = (function () {
        var Playfield = function (onElement, x, y, fieldWidth, fieldHeight) {
            var svgField = document.getElementById(onElement),
                svgNS = 'http://www.w3.org/2000/svg',
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
        };

        document.getElementById('playField').style.cursor = "none";
        document.getElementById('canvas-field').style.cursor = "none";
        return Playfield;
    }());

    return Playfield;
});
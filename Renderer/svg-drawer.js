var SvgDrawer = (function () {
    var SvgDrawer = Object.create({}),
        black = '#000',
        white = '#fff',
        fontStyle = 'fill: #00ff00; stroke: #fff; stroke-width: 0.5; font-size: 20px';

    Object.defineProperties(SvgDrawer, {
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

    return SvgDrawer;
}());
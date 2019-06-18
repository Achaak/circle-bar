# circle-bar
This is a module to simply add a circle bar to your site.

## Requirement :
* JQuery

## Install :
Load the required files.
Inside the page's head tag include the circle bar's CSS file.
``` html
<link rel="stylesheet" href="/your-path/circle-bar.css">
```

And in the page's footer, include the required javascript files.
``` html
<script src="/your-path/circle-bar.js"></script>
```

## Initialize :
For initialize the circle bar, insert this example snippet and update this with your parameters.
Exemple: 
``` js
$(document).ready(function() {
    circleBar().init(
        "#circle-bar", 
        {
            text: "Insert your text",
            lineColor: "#1d8eff",
            lineBgColor: "rgb(150, 203, 255)",
            backgroundColor: "white",
            lineWidth: "15",
            lineWidthHover: "7",
            bgLineWidth: "10",
            bgLineWidthHover: "4",
            lineDuration: "200ms",
            lineDelay: "100ms",
            diameter: "300",
            viewPourcentage: true,
            textCSS: {
                "color": "#a0a0a0",
                "font-weight": "bold",
                "font-family": "Verdana, Arial, Helvetica, sans-serif",
                "font-size": "1rem"
            },
            textHoverCSS: {
                "font-size": "1.5rem",
                "color": "#1d8eff"
            },
            pourcentageCSS: {
                "color": "#a0a0a0",
                "font-weight": "bold",
                "font-family": "Verdana, Arial, Helvetica, sans-serif",
                "text-transform": "uppercase",
                "font-size": "1rem"
            },
            pourcentageHoverCSS: {
                "font-size": "1.5rem",
                "color": "#1d8eff"
            }
        },
        50
    );
});
```


## Options :
```
text: [string],
lineColor: <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>,
lineBgColor: <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>,
backgroundColor: <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>,
lineWidth: [integer],
lineWidthHover: [integer],
bgLineWidth: [integer],
bgLineWidthHover: [integer],
lineDuration: [duration],
lineDelay: [duration],
diameter: [integer],
viewPourcentage: [boolean],
textCSS: {
/*
    Example :
    "color": "#a0a0a0",
    "font-weight": "bold",
    "font-family": "Verdana, Arial, Helvetica, sans-serif",
    "font-size": "1rem"
*/
},
textHoverCSS: {
/*
    Example :
    "font-size": "1.5rem",
    "color": "#1d8eff"
*/
},
pourcentageCSS: {
/*
    Example :
    "color": "#a0a0a0",
    "font-weight": "bold",
    "font-family": "Verdana, Arial, Helvetica, sans-serif",
    "text-transform": "uppercase",
    "font-size": "1rem"
*/
},
pourcentageHoverCSS: {
/*
    Example :
    "font-size": "1.5rem",
    "color": "#1d8eff"
*/
}
```

## Fonctions :
- [circleBar().init](#init)
- [circleBar().getValue](#getValue)
- [circleBar().getOpts](#getOpts)
- [circleBar().setText](#setText)
- [circleBar().setValue](#setValue)
- [circleBar().setLineColor](#setLineColor)
- [circleBar().setLineBgColor](#setLineBgColor)
- [circleBar().setBgColor](#setBgColor)
- [circleBar().setLineWidth](#setLineWidth)
- [circleBar().setBgLineWidth](#setBgLineWidth)
- [circleBar().setLineDuration](#setLineDuration)
- [circleBar().setLineDelay](#setLineDelay)
- [circleBar().setLineWidthHover](#setLineWidthHover)
- [circleBar().setbgLineWidthHover](#setbgLineWidthHover)
- [circleBar().setLineTransitionHover](#setLineTransitionHover)
- [circleBar().viewPourcentage](#viewPourcentage)
- [circleBar().setTextCSS](#setTextCSS)
- [circleBar().setTextHoverCSS](#setTextHoverCSS)
- [circleBar().setPourcentageCSS](#setPourcentageCSS)
- [circleBar().setPourcentageHoverCSS](#setPourcentageHoverCSS)

__circleBar().init__ <a name="init"></a>
``` js
/**
 * Used to create the circle bar
 *
 * @param {string} _elem Class or id of the slider
 * @param {Array} _opts List of options
 * @param {number} _value Value of the circle bar
 */
circleBar.createCircleBar(elem, opts, value);
```

__circleBar().getValue__ <a name="getValue"></a>
``` js
/**
 * Used to get the value of the circle bar
 */
circleBar.getValue();
```

__circleBar().getOpts__ <a name="getOpts"></a>
``` js
/**
 * Used to get the options of the circle bar
 */
circleBar.getOpts();
```

__circleBar().setText__ <a name="setText"></a>
``` js
/**
 * Used to set text
 *
 * @param {string} _text Text to insert
 */
circleBar.setText(text);
```

__circleBar().setValue__ <a name="setValue"></a>
``` js
/**
 * Used to set a value
 *
 * @param {number} _val Value of the circle bar
 */
circleBar.setValue(value);
```

__circleBar().setLineColor__ <a name="setLineColor"></a>
``` js
/**
 * Used to set the color of the line of the circle bar
 * 
 * @param {string} _lineColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
 */
circleBar.setLineColor(lineColor);
```

__circleBar().setLineBgColor__ <a name="setLineBgColor"></a>
``` js
/**
 * Used to set the background color of the line of the circle bar
 *
 * @param {string} _lineBgColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
 */
circleBar.setLineBgColor(lineBgColor);
```

__circleBar().setBgColor__ <a name="setBgColor"></a>
``` js
/**
 * Used to set the background color of the circle bar
 *
 * @param {string} _bgColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
 */
circleBar.setBgColor(bgColor);
```

__circleBar().setLineWidth__ <a name="setLineWidth"></a>
``` js
/**
 * Used to set the line width
 *
 * @param {number} _lineWidth Width of the line
 */
circleBar.setLineWidth(lineWidth);
```

__circleBar().setBgLineWidth__ <a name="setBgLineWidth"></a>
``` js
/**
 * Used to set the background line width
 *
 * @param {number} _bgLineWidth Width of the background line
 */
circleBar.setBgLineWidth(bgLineWidth);
```

__circleBar().setLineDuration__ <a name="setLineDuration"></a>
``` js
/**
 * Used to set the line duration of the circle bar transition
 *
 * @param {string} _lineDuration Duration of the transition
 */
circleBar.setLineDuration(lineDuration);
```

__circleBar().setLineDelay__ <a name="setLineDelay"></a>
``` js
/**
 * Used to set the line delay of the circle bar transition
 *
 * @param {string} _lineDelay Delay of the transition
 */
circleBar.setLineDelay(lineDelay);
```

__circleBar().setLineWidthHover__ <a name="setLineWidthHover"></a>
``` js
/**
 * Used to set the line hover width
 *
 * @param {number} _lineWidthHover Width of the line hover
 */
circleBar.setLineWidthHover(lineWidthHover);
```

__circleBar().setbgLineWidthHover__ <a name="setbgLineWidthHover"></a>
``` js
/**
 * Used to set the background line hover width
 *
 * @param {number} _bgLineWidthHover Width of the background line hover
 */
circleBar.setbgLineWidthHover(bgLineWidthHover);
```

__circleBar().setLineTransitionHover__ <a name="setLineTransitionHover"></a>
``` js
/**
 * Used to set the line transition hover of the circle bar transition
 *
 * @param {string} _lineTransitionHover Duration of the transition
 */
circleBar.setLineTransitionHover(lineTransitionHover);
```

__circleBar().viewPourcentage__ <a name="viewPourcentage"></a>
``` js
/**
 * Used to view the pourcentage of the circle bar
 *
 * @param {boolean} _bool True for view pourcentage if not false
 */
circleBar.viewPourcentage(bool);
```

__circleBar().setTextCSS__ <a name="setTextCSS"></a>
``` js
/**
 * Used to set the CSS of the text
 *
 * @param {Array} _css Array of CSS
 */
circleBar.setTextCSS(css);
```

__circleBar().setTextHoverCSS__ <a name="setTextHoverCSS"></a>
``` js
/**
 * Used to set the hover CSS of the text
 *
 * @param {Array} _css Array of CSS
 */
circleBar.setTextHoverCSS(css);
```

__circleBar().setPourcentageCSS__ <a name="setPourcentageCSS"></a>
``` js
/**
 * Used to set the CSS of the pourcentage
 *
 * @param {Array} _css Array of CSS
 */
circleBar.setPourcentageCSS(css);
```

__circleBar().setPourcentageHoverCSS__ <a name="setPourcentageHoverCSS"></a>
``` js
/**
 * Used to set the hover CSS of the pourcentage
 *
 * @param {Array} _css Array of CSS
 */
circleBar.setPourcentageHoverCSS(css);
```

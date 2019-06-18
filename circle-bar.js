$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function CircleBar() {
    var circleBarDOM = undefined;
    var circleDOM    = $('<div class="bgBar"></div><svg class="circle"><circle class="bgBar"/><circle class="bar"/></svg>');
    var barDOM       = circleDOM.find(".bar");
    var bgBarDOM     = circleDOM.find(".bgBar");
    var infosCtner   = $('<div class="infos-ctner"></div>');
    var pourcDOM     = $('<div class="pourcentage"></div>');
    var textDOM      = $('<div class="text"></div>');
    var value        = 0;
    var transition   = {bar: [], bgBar: []};
    var opts         = {
        lineColor    : "#307bbb",
        lineWidth: "10",
        diameter : "100",
        lineTransitionHover: "500ms",
        viewPourcentage: true
    };



    /**
     * Used to create the circle bar
     *
     * @public
     * @param {string} _elem Class or id of the slider
     * @param {Array} _opts List of options
     * @param {number} _value Value of the circle bar
     */
    function init(_elem, _opts, _value) {
        // Defind variable
        circleBarDOM = $(_elem);
        circleBarDOM.empty(); // Clear element DOM
        value = _value;
        $.extend(opts, _opts);
        circleBarDOM.addClass("circle-bar");

        // Create the circle
        createCircle();

        // Create the infos container
        createInfosCtner();
    }


    
    /**
     * Used to create the infos content
     *
     * @private
     */
    function createInfosCtner() {
        // View pourcentage text if has option
        if (opts.viewPourcentage) viewPourcentage();

        // Set text if has a text
        if (opts.text) setText();

        // Set text CSS if has option
        if (opts.textCSS) setTextCSS();

        // Set pourcentage CSS if has option
        if (opts.pourcentageCSS) setPourcentageCSS();

        // Add the infos container
        circleBarDOM.append(infosCtner);
    }



    /**
     * Used to create the circle content
     *
     * @private
     */
    function createCircle() {
        // Set line width
        setLineWidth();

        // Set width the background line if has option
        if (opts.bgLineWidth) setBgLineWidth();

        // Set line width hover if has option
        if (opts.lineWidthHover) setLineWidthHover();

        // Set diameter of the circle
        setDiameter();


        // Set line color
        setLineColor();

        // Set line background color if has option
        if (opts.lineBgColor) setLineBgColor();

        // Set background color if has option
        if (opts.backgroundColor) setBgColor();


        // Set line duration if has option
        if (opts.lineDuration) setLineDuration();
        
        // Set line delay if has option
        if (opts.lineDelay) setLineDelay();

        // Set line transition hover
        setLineTransitionHover();


        // Set the circle DOM
        circleBarDOM.append(circleDOM)


        // Set a value
        setValue();
    }



    /**
     * Used to set text
     *
     * @public
     * @param {string} _text Text to insert
     */
    function setText(_text) {
        if (_text) opts.text = _text;
    
        textDOM.text(opts.text);
        
        if(infosCtner.find(textDOM).length == 0) infosCtner.append(textDOM);
    }



    /**
     * Used to view the pourcentage of the circle bar
     *
     * @public
     * @param {boolean} _bool True for view pourcentage if not false
     */
    function viewPourcentage(_bool) {
        if (_bool) opts.viewPourcentage = _bool;
    
        pourcDOM.text(value+'%');
        
        if(infosCtner.find(pourcDOM).length == 0) infosCtner.append(pourcDOM);
    }



    /**
     * Used to set a value
     *
     * @public
     * @param {number} _val Value of the circle bar
     */
    function setValue(_val) {
        if (_val) value = _val;

        $(window).on('resize scroll load', function() {
            if (circleBarDOM.isInViewport()) {
                animate();
            } else {}
        });

        if (_val) animate();
    }



    /**
     * Used animate the circle bar
     *
     * @private
     */
    function animate() {
        // Prepare the value for the dashoffset
        var _dasharray = 2*Math.PI*((opts.diameter/2)-opts.lineWidth);

        // Set the value
        barDOM.css("stroke-dashoffset", _dasharray-((_dasharray/100)*value));

        // DOM update
        if (opts.viewPourcentage) viewPourcentage();
    }



    /**
     * Used to set the color of the line of the circle bar
     *
     * @public
     * @param {string} _lineColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
     */
    function setLineColor(_lineColor) {
        if (_lineColor) opts.lineColor = _lineColor;

        // Set the color
        barDOM.css("stroke", opts.lineColor);
    }



    /**
     * Used to set the background color of the line of the circle bar
     *
     * @public
     * @param {string} _lineBgColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
     */
    function setLineBgColor(_lineBgColor) {
        if (_lineBgColor) opts.lineBgColor = _lineBgColor;

        // Set line background color
        bgBarDOM.css("stroke", opts.lineBgColor);
    }



    /**
     * Used to set the background color of the circle bar
     *
     * @public
     * @param {string} _bgColor <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>
     */
    function setBgColor(_bgColor) {
        if (_bgColor) opts.backgroundColor = _bgColor;

        // Set background color
        bgBarDOM.css("fill", opts.backgroundColor);
    }



    /**
     * Used to set the CSS of the text
     *
     * @public
     * @param {Array} _css Array of CSS
     */
    function setTextCSS(_css) {
        if (_css) opts.textCSS = _css;

        // Set text CSS
        textDOM.css(opts.textCSS);
    }



    /**
     * Used to set the CSS of the pourcentage
     *
     * @public
     * @param {Array} _css Array of CSS
     */
    function setPourcentageCSS(_css) {
        if (_css) opts.pourcentageCSS = _css;

        // Set text CSS
        pourcDOM.css(opts.pourcentageCSS);
    }
    
    
    
    /**
     * Used to set the hover CSS of the text
     *
     * @public
     * @param {Array} _css Array of CSS
     */
    function setTextHoverCSS(_css) {
        if (_css) opts.textHoverCSS = _css;
    }



    /**
     * Used to set the hover CSS of the pourcentage
     *
     * @public
     * @param {Array} _css Array of CSS
     */
    function setPourcentageHoverCSS(_css) {
        if (_css) opts.pourcentageHoverCSS = _css;
    }



    /**
     * Used to initialize the transition of the circle bar
     *
     * @private
     */
    function initTransition() {
        // Init transition for barDOM
        var _transitionStr = "";
        for (var i = 0; i < transition.bar.length; i++) {
            _transitionStr += (_transitionStr=="" ? "" : ",") + transition.bar[i].name + " " + transition.bar[i].value;
        }

        barDOM.css("transition", _transitionStr);

        // Init transition for bgBarDOM
        var _transitionStr = "";
        for (var i = 0; i < transition.bgBar.length; i++) {
            _transitionStr += (_transitionStr=="" ? "" : ",") + transition.bgBar[i].name + " " + transition.bgBar[i].value;
        }

        bgBarDOM.css("transition", _transitionStr);
    }



    /**
     * Used to set the line width
     *
     * @public
     * @param {number} _lineWidth Width of the line
     */
    function setLineWidth(_lineWidth) {
        if (_lineWidth) opts.lineWidth = _lineWidth;

        // Set the line width
        barDOM.attr("stroke-width", opts.lineWidth);
    }


    
    /**
     * Used to set the background line width
     *
     * @public
     * @param {number} _bgLineWidth Width of the background line
     */
    function setBgLineWidth(_bgLineWidth) {
        if (_bgLineWidth) opts.bgLineWidth = _bgLineWidth;

        // Set the line width
        bgBarDOM.attr("stroke-width", opts.bgLineWidth);
    }



    /**
     * Used to set the line hover width
     *
     * @public
     * @param {number} _lineWidthHover Width of the line hover
     */
    function setLineWidthHover(_lineWidthHover) {
        if (_lineWidthHover) opts.lineWidthHover = _lineWidthHover;
        initHover();
    }



    /**
     * Used to set the background line hover width
     *
     * @public
     * @param {number} _bgLineWidthHover Width of the background line hover
     */
    function setbgLineWidthHover(_bgLineWidthHover) {
        if (_bgLineWidthHover) opts.bgLineWidthHover = _bgLineWidthHover;
        initHover();
    }



    /**
     * Used to initialize the transition of hover
     *
     * @private
     */
    function initHover() {
        // Set line width hover
        circleBarDOM.hover(
            function(){
                // Set the new stroke width
                barDOM.css("stroke-width", opts.lineWidthHover);
                bgBarDOM.css("stroke-width", opts.bgLineWidthHover);

                // Set the hover CSS of the infos content
                textDOM.css(opts.textHoverCSS);
                pourcDOM.css(opts.pourcentageHoverCSS);
            },
            function(){
                // Set the old stroke width
                barDOM.css("stroke-width", opts.lineWidth);
                bgBarDOM.css("stroke-width", opts.bgLineWidth);

                // Set the CSS of the infos content
                textDOM.css(opts.textCSS);
                pourcDOM.css(opts.pourcentageCSS);
            }
        );
    }



    /**
     * Used to set the line duration of the circle bar transition
     *
     * @public
     * @param {string} _lineDuration Duration of the transition
     */
    function setLineDuration(_lineDuration) {
        if (_lineDuration) opts.lineDuration = _lineDuration;
        setTransitionDashoffset();
    }



    /**
     * Used to set the line delay of the circle bar transition
     *
     * @public
     * @param {string} _lineDelay Delay of the transition
     */
    function setLineDelay(_lineDelay) {
        if (_lineDelay) opts.lineDelay = _lineDelay;

        // If line duration id undefined
        if (!opts.lineDuration) opts.lineDuration = "1s";
        setTransitionDashoffset();
    }



    /**
     * Used to set the values of the circle bar transition
     *
     * @private
     */
    function setTransitionDashoffset() {
        transition.bar.push ( { name: "stroke-dashoffset", value: opts.lineDuration + " " + (opts.lineDelay ? opts.lineDelay : "") } );

        initTransition();
    }



    /**
     * Used to set the line transition hover of the circle bar transition
     *
     * @public
     * @param {string} _lineTransitionHover Duration of the transition
     */
    function setLineTransitionHover(_lineTransitionHover) {
        if (_lineTransitionHover) opts.lineTransitionHover = _lineTransitionHover;

        // Set line transition hover
        transition.bar.push  ( { name: "stroke-width", value: opts.lineTransitionHover } );
        transition.bgBar.push( { name: "stroke-width", value: opts.lineTransitionHover } );

        // Set text transition
        pourcDOM.css('transition', 'all ' + opts.lineTransitionHover);
        textDOM.css('transition', 'all ' + opts.lineTransitionHover);

        initTransition();
    }



    /**
     * Used to set the diameter of the circle bar
     *
     * @public
     * @param {number} _diameter Diameter of the circle bar
     */
    function setDiameter(_diameter) {
        if (_diameter) opts.diameter = _diameter;

        // Defind circle bar size
        circleBarDOM.css("width", opts.diameter+"px");
        circleBarDOM.css("height", opts.diameter+"px");

        // Defind circle size
        circleDOM.css("width", opts.diameter+"px");
        circleDOM.css("height", opts.diameter+"px");

        // Set values for the bar
        barDOM.attr("r", ((opts.diameter/2)-opts.lineWidth));
        barDOM.attr("cx", (opts.diameter/2));
        barDOM.attr("cy", (opts.diameter/2));
        barDOM.css("stroke-dasharray", 2*Math.PI*((opts.diameter/2)-opts.lineWidth));
        barDOM.css("stroke-dashoffset", 2*Math.PI*((opts.diameter/2)-opts.lineWidth));

        // Set values for the background bar
        bgBarDOM.attr("r", ((opts.diameter/2)-opts.lineWidth));
        bgBarDOM.attr("cx", (opts.diameter/2));
        bgBarDOM.attr("cy", (opts.diameter/2));
        bgBarDOM.css("stroke-dasharray", 2*Math.PI*((opts.diameter/2)-opts.lineWidth));
    }



    /**
     * Used to get the value of the circle bar
     *
     * @public
     */
    function getValue() { return value; }

    /**
     * Used to get the options of the circle bar
     *
     * @public
     */
    function getOpts()  { return opts;  }



    return {
        "init": function(_elem, _opts, _value) {
            init(_elem, _opts, _value);
        },
        "getValue": function() {
            return getValue();
        },
        "getOpts": function() {
            return getOpts();
        },
        "setText": function(_text) {
            setText(_text);
        },
        "setValue": function(_val) {
            setValue(_val);
        },
        "setLineColor": function(_lineColor) {
            setLineColor(_lineColor);
        },
        "setLineBgColor": function(_lineBgColor) {
            setLineBgColor(_lineBgColor);
        },
        "setBgColor": function(_bgColor) {
            setBgColor(_bgColor);
        },
        "setLineWidth": function(_lineWidth) {
            setLineWidth(_lineWidth);
        },
        "setBgLineWidth": function(_bgLineWidth) {
            setBgLineWidth(_bgLineWidth);
        },
        "setLineDuration": function(_lineDuration) {
            setLineDuration(_lineDuration);
        },
        "setLineDelay": function(_lineDelay) {
            setLineDelay(_lineDelay);
        },
        "setLineWidthHover": function(_lineWidthHover) {
            setLineWidthHover(_lineWidthHover);
        },
        "setbgLineWidthHover": function(_bgLineWidthHover) {
            setbgLineWidthHover(_bgLineWidthHover);
        },
        "setLineTransitionHover": function(_lineTransitionHover) {
            setLineTransitionHover(_lineTransitionHover);
        },
        "viewPourcentage": function(_bool) {
            viewPourcentage(_bool);
        },
        "setTextCSS": function(_css) {
            setTextCSS(_css);
        },
        "setTextHoverCSS": function(_css) {
            setTextHoverCSS(_css);
        },
        "setPourcentageCSS": function(_css) {
            setPourcentageCSS(_css);
        },
        "setPourcentageHoverCSS": function(_css) {
            setPourcentageHoverCSS(_css);
        }
    };
}
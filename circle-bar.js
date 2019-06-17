function circleBar() {
    var circleBarDOM = undefined;
    var sliceDOM     = $('<div class="slice"><div class="bgBar"></div><div class="bar"></div><div class="fill"></div></div>');
    var barDOM       = sliceDOM.find(".bar");
    var fillDOM      = sliceDOM.find(".fill");
    var bgBarDOM     = sliceDOM.find(".bgBar");
    var infosCtner   = $('<div class="infos-ctner"></div>');
    var value        = 0;
    var opts         = {
        lineColor    : "#307bbb",
        lineWidth: "10px",
        diameter : "100px",
        lineTransitionHover: "500ms"
    };

    function createCircleBar(_elem, _opts, _value) {
        // Defind variable
        circleBarDOM = $(_elem);
        circleBarDOM.empty(); // Clear element DOM
        value = _value;
        $.extend(opts, _opts);
        circleBarDOM.addClass("circle-bar");

        // Add the infos container
        circleBarDOM.append(infosCtner);

        // Create the circle
        createCircle();

        // Set text if has a text
        if(opts.text) setText();
    }


    function createCircle() {
        // Set the circle DOM
        circleBarDOM.append(sliceDOM)

        // Set line width
        setLineWidth();

        // Set line color
        setLineColor();

        // Set a value
        setValue();

        // Set diameter of the circle
        setDiameter();

        // Set line width hover if has option
        if (opts.lineWidthHover) setLineWidthHover();

        // Set line background color if has option
        if (opts.lineBgColor) setLineBgColor();

        // Set background color if has option
        if (opts.backgroundColor) setBgColor();

        // Set line transition hover
        setLineTransitionHover();
    }



    function setText(_text) {

    }



    function setValue(_val) {
        if (_val) value = _val;

        // Set class if the value more than 50
        if (value > 50) circleBarDOM.addClass("more-50");
        else            circleBarDOM.removeClass("more-50");


        // Transform value to pourcentage
        _pourc = (360/100)*value;

        // Set pourcentage
        barDOM.css("transform", "rotate("+_pourc+"deg)");
    }



    function setLineColor(_lineColor) {
        if (_lineColor) opts.lineColor = _lineColor;

        // Set the color
        barDOM.css("border-color", opts.lineColor);
        fillDOM.css("border-color", opts.lineColor);
    }



    function setLineBgColor(_lineBgColor) {
        if (_lineBgColor) opts.lineBgColor = _lineBgColor;

        // Set line background color
        bgBarDOM.css("border-color", opts.lineBgColor);
    }



    function setBgColor(_bgColor) {
        if (_bgColor) opts.backgroundColor = _bgColor;

        // Set background color
        circleBarDOM.css("background-color", opts.backgroundColor)
    }



    function setLineWidth(_lineWidth) {
        if (_lineWidth) opts.lineWidth = _lineWidth;

        // Set the border width
        barDOM.css("border-width", opts.lineWidth);
        fillDOM.css("border-width", opts.lineWidth);
        bgBarDOM.css("border-width", opts.lineWidth);
    }



    function setLineWidthHover(_lineWidthHover) {
        if (_lineWidthHover) opts.lineWidthHover = _lineWidthHover;

        // Set line width hover
        circleBarDOM.hover(
            function(){
                barDOM.css("border-width", opts.lineWidthHover);
                fillDOM.css("border-width", opts.lineWidthHover);
                bgBarDOM.css("border-width", opts.lineWidthHover);
            },
            function(){
                barDOM.css("border-width", opts.lineWidth);
                fillDOM.css("border-width", opts.lineWidth);
                bgBarDOM.css("border-width", opts.lineWidth);
            }
        );
    }



    function setLineTransitionHover(_lineTransitionHover) {
        if (_lineTransitionHover) opts.lineTransitionHover = _lineTransitionHover;

        // Set line transition hover
        barDOM.css("transition", "border-width "+opts.lineTransitionHover);
        fillDOM.css("transition", "border-width "+opts.lineTransitionHover);
        bgBarDOM.css("transition", "border-width "+opts.lineTransitionHover);
    }



    function setDiameter(_diameter) {
        if (_diameter) opts.diameter = _diameter;

        circleBarDOM.css("width", opts.diameter);
        circleBarDOM.css("height", opts.diameter);

        sliceDOM.css("clip", "rect(0, "+opts.diameter+", "+opts.diameter+", "+parseInt(opts.diameter)/2+"px)");
        barDOM.css("clip", "rect(0, "+parseInt(opts.diameter)/2+"px, "+opts.diameter+", 0");
        fillDOM.css("clip", "rect(0, "+opts.diameter+", "+opts.diameter+", "+parseInt(opts.diameter)/2+"px)")
    }



    function getValue() { return value; }
    function getOpts()  { return opts;  }



    return {
        "init": function(_elem, _opts, _value) {
            createCircleBar(_elem, _opts, _value);
        },
        "getValue": function() {
            getValue();
        },
        "getOpts": function() {
            getOpts();
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
        "setLineWidthHover": function(_lineWidthHover) {
            setLineWidthHover(_lineWidthHover);
        },
        "setLineTransitionHover": function(_lineTransitionHover) {
            setLineTransitionHover(_lineTransitionHover);
        }
    };
}
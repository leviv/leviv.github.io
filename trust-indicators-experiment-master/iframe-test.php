<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Iframe Test</title>
    <style>

        body {
            margin-top: 0;
            padding-top: 0;
        }

        iframe {
            border: none;
        }


    </style>
</head>
<body>
<iframe id="trust-iframe" width="100%" height="10000" src="http://dev/trust-project/articles/what-the-new-superbug-means-for-the-fight-against-antibiotic-resistance"></iframe>

<script>

    window.addEventListener('message', trust_receiveIframeMessage, false);

    // What to do when we receive a postMessage
    function trust_receiveIframeMessage(event) {
        var iframe;
        // parse the JSON data
        var data = JSON.parse(event.data);
        // get the iframe
        var iframe = document.getElementById('trust-iframe');

        // find out what we need to do with it
        if(data.action === 'scrollTo') {

            // check the height of the parent window content
            // window.height

            scroll(0, data.scrollToPosition);

        }
    }








/*
    // set the height of the iframe to the height of the client window
    function setFbStudyIframeHeight() {
        //document.getElementById('fb-iframe').style.height = window.innerHeight + 'px';
    }

    setFbStudyIframeHeight();

    // debounce function for resize
    var fbStudyResizeWindow = fbStudy_debounce(function() {
        setFbStudyIframeHeight();
    }, 250);
    // resize listener
    window.addEventListener('resize', fbStudyResizeWindow);

    function fbStudy_debounce(func, wait, immediate) {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};
    		var callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if (callNow) func.apply(context, args);
    	};
    };
    */
</script>
</body>
</html>

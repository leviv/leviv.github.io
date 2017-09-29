'use strict';

var cmeTreeIframes = [];

function handleCmeIframeMessage(event) {
    var parentURL, newIframe, data, iframeID, iframe, thisIframe, exists;

    parentURL = window.location.href;

    // quit the postmessage loop if it's NOT from a trusted site (engagingnewsproject.org or our dev sites)
    // If you want to see what it matches/doesn't match, go here: http://regexr.com/3g4rc
    if (!/https?:\/\/(?:dev|localhost:3000|tree\.mediaengagement\.org|enptree(\.staging)?\.wpengine\.com)\b/.test(event.origin)) {
        console.error('Domain not allowed.', event.origin);
        return false;
    }

    // make sure we got a string as our message
    if (typeof event.data !== 'string') {
        console.error('Data is not a string.');
        return false;
    }

    // parse the JSON data
    data = JSON.parse(event.data);

    iframeID = 'cme-tree__' + data.tree_id;

    iframe = document.getElementById(iframeID);
    // if we need to use it...
    newIframe = {
        iframe: iframe,
        parentURL: parentURL,
        treeID: data.tree_id
    };

    // if one doesn't exist, create it
    if (cmeTreeIframes.length === 0) {

        cmeTreeIframes.push(new CmeIframeTree(newIframe));
        thisIframe = cmeTreeIframes[0];
    } else {
        // check if it exists
        exists = false;
        for (var cme_i = 0; cme_i < cmeTreeIframes.length; cme_i++) {
            if (cmeTreeIframes[cme_i].iframeID === iframe.id) {
                thisIframe = cmeTreeIframes[cme_i];
                exists = true;
            }
        }
        if (exists === false) {
            // create it!
            cmeTreeIframes.push(new CmeIframeTree(newIframe));
            thisIframe = cmeTreeIframes[cmeTreeIframes.length - 1];
        }
    }
    thisIframe.receiveIframeMessage(event.origin, data);
}

/**
* Add event listener for when our iframe sends us postmessage data to process
*/
window.addEventListener('message', handleCmeIframeMessage, false);

/**
* Try to get any quizzes that might not have been loaded.
* When a quiz is loaded, it sends a request to the parent, but the parent might not be loaded yet. So, when our parent is loaded, let's also try to create our iframes
*/
document.onreadystatechange = function () {
    var trees = void 0,
        request = void 0;

    if (document.readyState === "complete") {
        // request load from quizzes
        trees = document.getElementsByClassName('cme-tree__iframe');
        // for each quiz, send a message to that iframe so we can get its height
        for (var i = 0; i < trees.length; ++i) {
            // get the stored iframeheight
            // send a postMessage to get the correct height (and kick off the proces to grab all the iframes)
            request = '{"status":"request","action":"init"}';
            console.log('sending init', request);
            trees[i].contentWindow.postMessage(request, trees[i].src);
        }
    }
};
'use strict';

function CmeIframeTree(data) {

    this.iframe = data.iframe;
    this.iframeID = data.iframe.id;
    this.treeID = data.treeID;

    // load it!
    this.onLoadIframe();
}

// getters and setters

CmeIframeTree.prototype = {
    constructor: CmeIframeTree,

    getSiteName: function getSiteName() {
        var siteName = this.getFBSiteNameMeta();
        // see if there's a Facebook OG:SiteName attribute, if not, return the current URL
        if (!siteName) {
            siteName = document.title;
        } else {
            siteName = '';
        }
        return siteName;
    },

    getFBSiteNameMeta: function getFBSiteNameMeta() {
        var siteName = document.querySelector('meta[property="og:site_name"]');
        if (siteName) {
            return siteName.content;
        } else {
            return false;
        }
    },

    // What to do when we receive a postMessage
    receiveIframeMessage: function receiveIframeMessage(origin, data) {
        var response;
        response = {};
        console.log('parent recieved message', data);

        // find out what we need to do with it
        if (data.action === 'treeHeight') {
            response.setTreeHeight = this.setTreeHeight(data.treeHeight);
        }
        // anytime there's a state update, scroll to the quiz, but not on load
        else if (data.action === 'update' && data.data.updatedBy !== 'forceCurrentState') {
                response.scrollToQuizResponse = this.scrollToQuiz();
            } else if (data.action === 'getParentSiteName') {
                this.sendSiteName();
            } else if (data.action === 'getParentPath') {
                this.sendPath();
            } else if (data.action === 'getParentHost') {
                this.sendHost();
            }

        // send a response sayin, yea, we got it!
        // event.source.postMessage("success!", event.origin);
        return response;
    },

    // what to do on load of an iframe
    onLoadIframe: function onLoadIframe() {
        // write our styles that apply to ALL quizzes
        this.addIframeStyles();
        // call the quiz and get its height
        this.getQuizHeight();
        // call the tree and send the host the page its embedded on
        this.sendHost();
        // call the tree and send the host the page its embedded on
        this.sendPath();
    },

    getQuizHeight: function getQuizHeight() {
        var request;
        // send a postMessage to get the correct height
        request = '{"status":"request","action":"sendBodyHeight"}';
        this.iframe.contentWindow.postMessage(request, this.iframe.src);
    },

    /**
    * Send location.host of the current page (the parent page)
    */
    sendSiteName: function sendSiteName() {
        var request;

        // send a postMessage to get the correct height
        request = '{"action":"setParentSiteName","siteName":"' + this.getSiteName() + '"}';
        this.iframe.contentWindow.postMessage(request, this.iframe.src);
    },

    /**
    * Send location.path of the current page (the parent page)
    */
    sendPath: function sendPath() {
        var request;

        // send a postMessage to get the correct height
        request = '{"action":"setParentPath","path":"' + window.self.location.pathname + '"}';
        this.iframe.contentWindow.postMessage(request, this.iframe.src);
    },

    /**
    * Send location.host of the current page (the parent page)
    */
    sendHost: function sendHost() {
        var request;

        // send a postMessage to get the correct height
        request = '{"action":"setParentHost","host":"' + window.self.location.host + '"}';
        this.iframe.contentWindow.postMessage(request, this.iframe.src);
    },

    /**
    * Sets the height of the iframe on the page
    */
    setTreeHeight: function setTreeHeight(height) {
        console.log(height);
        // set the height on the style
        this.iframe.style.height = height + 'px';
        return height;
    },

    /**
    * Snaps the quiz to the top of the viewport, if needed
    */
    scrollToQuiz: function scrollToQuiz() {
        var response = false;
        // this will get the current quiz distance from the top of the viewport
        var distanceFromTopOfViewport = this.iframe.getBoundingClientRect().top;
        // see if we're within -20px and 100px of the question (negative numbers means we've scrolled PAST (down) the quiz)
        if (-20 < distanceFromTopOfViewport && distanceFromTopOfViewport < 100) {
            // Question likely within viewport. Do not scroll.
            response = 'noScroll';
        } else {
            // let's scroll them to the top of the next question (some browsers like iPhone Safari jump them way down the page)
            scrollBy(0, distanceFromTopOfViewport - 10);
            response = 'scrolledTop';
        }
        return response;
    },

    addIframeStyles: function addIframeStyles() {
        // set our styles
        var css = '.cme-tree__iframe { -webkit-transition: all .3s ease-in-out;transition: all .3s ease-in-out; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
};
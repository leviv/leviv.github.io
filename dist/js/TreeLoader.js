'use strict';

(function () {

    function TreeLoader() {
        var _rootURL, _treeSlug, _treeStyle, _loaderScript, _treeContainer, _cssPriority;

        /**
        * Private functions
        */
        var _setRootURL = function _setRootURL(url) {
            // regex it to see if it's one of our DEV urls
            var regex = /https?:\/\/(?:(?:localhost:3000|dev)\/decision-tree|(?:enptree)\.(?:staging\.)?wpengine\.com)\b/;
            _rootURL = regex.exec(url);

            if (_rootURL === null) {
                // we're not on DEV, so pass the rootURL as our PROD url
                _rootURL = 'https://tree.mediaengagement.org';
            }

            return _rootURL;
        };

        var _setTreeSlug = function _setTreeSlug(slug) {

            // Get Tree Slug
            if (slug === null || slug === '') {
                console.error('No tree specified. Add "?tree=slug-of-tree" to your URL, like this: https://tree.mediaengagement.org/dist/js/TreeLoader.min.js?tree=citizen');
            } else {
                _treeSlug = slug;
            }
            return _treeSlug;
        };

        var _setTreeStyle = function _setTreeStyle(style) {
            // Get Style
            if (style === null || style === '') {
                _treeStyle = 'base';
            } else {
                _treeStyle = style;
            }
            return _treeStyle;
        };

        var _setCSSPriority = function _setCSSPriority(style) {
            // Test string for a match where we'll need to set !important
            var re = /.+(important|clean-slate)$/;
            if (re.test(style)) {
                _cssPriority = 'important';
            } else {
                _cssPriority = '';
            }
            return _cssPriority;
        };

        var _setLoaderScript = function _setLoaderScript(script) {
            // Set the script
            _loaderScript = script;

            return _loaderScript;
        };

        this.getRootURL = function () {
            return _rootURL;
        };
        this.getTreeSlug = function () {
            return _treeSlug;
        };
        this.getTreeStyle = function () {
            return _treeStyle;
        };
        this.getCSSPriority = function () {
            return _cssPriority;
        };
        this.getLoaderScript = function () {
            return _loaderScript;
        };
        this.getTreeContainer = function () {
            return _treeContainer;
        };

        // INIT
        // Get Root Domain
        // get the current script being processed (this one)
        var scripts = document.querySelectorAll('script[src]');

        _setLoaderScript(scripts[scripts.length - 1]);
        _setRootURL(this.getLoaderScript().src);
        _setTreeSlug(this.getParameterByName('tree', this.getLoaderScript().src));
        _setTreeStyle(this.getParameterByName('style', this.getLoaderScript().src));
        _setCSSPriority(this.getTreeStyle());

        // create our tree container
        _treeContainer = this.createTreeContainer(this.getTreeSlug(), this.getLoaderScript());

        var resources = [{
            src: this.getRootURL() + '/dist/js/cme-tree.min.js',
            type: 'js'
        }, {
            src: this.getRootURL() + '/dist/css/' + this.getTreeStyle() + '.min.css',
            type: 'css'
        }];

        var treeFilesLoaded = this.loadResources(resources).then(this.runCreateTree.bind(this));
    }

    TreeLoader.prototype = {
        constructor: TreeLoader,

        // Get our Script File Path for parsing
        getParameterByName: function getParameterByName(name, url) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        createTreeContainer: function createTreeContainer(treeSlug, insertItAfter) {
            // Create and insert container DIV
            var treeContainer = document.createElement('div');
            // set the ID
            treeContainer.id = 'cme-tree__' + treeSlug;
            treeContainer.classList.add('cme-tree__loader-container');
            // insert the container after this
            insertItAfter.parentNode.insertBefore(treeContainer, insertItAfter.nextSibling);

            return treeContainer;
        },

        // Resources = [[{src: '/wutever.js', type: 'js'}, {src: '/wutever.css', type: 'css'}]]
        loadResources: function loadResources(resources) {

            var promises = [];

            for (var i = 0; i < resources.length; i++) {
                promises.push(this.loadResource(resources[i]));
            }

            return Promise.all(promises);
        },

        loadResource: function loadResource(resource) {
            // This promise will be used by Promise.all to determine success or failure
            return new Promise(function (resolve, reject) {
                var element, tag, attr, parent;
                switch (resource.type) {
                    case 'js':
                        tag = 'script';
                        break;
                    case 'css':
                        tag = 'link';
                        break;
                }

                element = document.createElement(tag);

                // Important success and error for the promise
                element.onload = function () {
                    resolve(resource.src);
                };
                element.onerror = function () {
                    reject(resource.src);
                };

                // Need to set different attributes depending on tag type
                switch (resource.type) {
                    case 'js':
                        element.type = 'text/javascript';
                        element.async = true;
                        attr = 'src';
                        parent = 'body';
                        break;
                    case 'css':
                        element.type = 'text/css';
                        element.rel = 'stylesheet';
                        attr = 'href';
                        parent = 'head';
                        break;
                }

                // Inject into document to kick off loading
                element[attr] = resource.src;
                document[parent].appendChild(element);
            });
        },

        runCreateTree: function runCreateTree() {
            var treeOptions = {
                slug: this.getTreeSlug(),
                container: this.getTreeContainer(),
                cssPriority: this.getCSSPriority()
            };
            window.createTree(treeOptions);
        }

        // run the loader
    };var treeLoader = new TreeLoader();
})(window);
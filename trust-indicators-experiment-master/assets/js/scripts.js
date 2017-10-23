$(document).ready(function() {

    var closedElements = ['footnote', 'category', 'author'];

    // add in learn more category button
    $('.category__type').after('<button class="category__button">Learn More</button>');
    $('.category__content').append('<button class="category__second-close accordion__second-close">'+svgClose()+' Close Section</button>');
    $('.author__content').before('<button id="authorBtn" class="author__button">Read Bio</button>');
    $('.author__content').append('<button class="author__second-close accordion__second-close">'+svgClose()+' Close Section</button>');

    for(var i = 0; i < closedElements.length; i++) {
        // hide closedElements on load
        if($('.'+closedElements[i]+'__button').length) {
            $('.'+closedElements[i]+'__button').addClass('accordion--closed').addClass('accordion__button');
            $('.'+closedElements[i]+'__content').addClass('accordion__content');
        }
    }

    var authorBtn = {
        'button': $('.author__button'),
        'label': 'Author Bio',
        'replaceButton': true,
        'closeLocation': $('.author__button'),
        'content': 'Read Bio',
    };

    $('.author__button').data('btn', authorBtn);
    $('.author__second-close').data('btn', authorBtn);

    var categoryBtn = {
        'button': $('.category__button'),
        'label': 'Article Type',
        'replaceButton': true,
        'closeLocation': $('.category__button'),
        'content': 'Learn More',
    };

    $('.category__button').data('btn', categoryBtn);
    $('.category__second-close').data('btn', categoryBtn);

    var footnoteBtn = {
        'button': '',
        'replaceButton': true,
        'closeLocation': '',
        'content': '',
    };

    // track all link clicks
    $(document).on('click', 'a', function(e) {
         e.preventDefault();
         url = $(this).attr('href');
         linkText = $.trim($(this).text());
         linkText = linkText.replace(/\r?\n|\r/g, " ");
         // if there's multiple spaces, condense them
         linkText = linkText.replace(/\s\s\s/g, "");
         logClick('Link: '+ linkText, url);
         window.location.href = url;
    });


    // loop through footnotes and create their variables
    $('.footnote__button').each(function(i) {
        var footnoteId = $(this).data('footnote-id');

        footnoteBtn = {
            'button': $(this),
            'label': 'Footnote '+footnoteId,
            'replaceButton': true,
            'content': '<sup>'+footnoteId+'</sup>',
            'closeLocation': $(this),
        };

        // assign the data to the button
        $(this).data('btn', footnoteBtn);
    });

    function process_accordion(btn) {
        if(btn.button.hasClass('accordion--closed')) {
            accordionOpen(btn.button);
            addCloseIcon(btn);

            ga('send', 'event', {
              eventCategory: btn.label,
              eventAction: 'open',
              eventLabel: userID,
            });

            logClick(btn.label, 'Opened');
        } else {
            accordionClosed(btn.button);
            removeCloseIcon(btn);
            logClick(btn.label, 'Closed');
        }
    }

    function addCloseIcon(btn) {
        if(btn.replaceButton === true) {
            btn.button.html(svgClose());
        } else {
            btn.closeLocation.append(svgClose());
        }
    }

    function removeCloseIcon(btn) {
        // remove the SVG Icon
        if(btn.replaceButton === true) {
            btn.button.html(btn.content);
        } else {
            btn.closeLocation.children().remove();
        }
    }

    // second close for long content

    function moveToBtn(btn) {
        var distanceFromTopOfViewport = btn.button[0].getBoundingClientRect().top;
        // document.getElementById(btnId).getBoundingClientRect().top;
        // see if we're within -20px and 100px of the question (negative numbers means we've scrolled PAST (down) the quiz)
        if( -20 < distanceFromTopOfViewport && distanceFromTopOfViewport < 100) {
            // Question likely within viewport. Do not scroll.
        } else {
            // let's scroll them to the top of the next question (some browsers like iPhone Safari jump them way down the page)
            scrollBy(0, (distanceFromTopOfViewport - 10));
        }
    }

    $(document).on('click', '.accordion__button', function(e) {
        e.preventDefault();
        var btn = $(this).data('btn');

        process_accordion(btn);

    });

    $(document).on('click', '.accordion__second-close', function(e) {
        e.preventDefault();
        var btn = $(this).data('btn');
        process_accordion(btn);
        // move them to the location of the closed section
        moveToBtn(btn);
    });

    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function accordionClosed(e) {
        e.addClass('accordion--closed');
        e.removeClass('accordion--open');
    }

    function accordionOpen(e) {
        e.removeClass('accordion--closed');
        e.addClass('accordion--open');
    }

    function log(action, label, comment) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '../../inc/class.log.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                // alert('Something went wrong.  Name is now ' + xhr.responseText);
                // xhr.send(encodeURI('log=' +logContent ));
            }
            else if (xhr.status !== 200) {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send(encodeURI('log=true&identifier='+studyType+'&user_id='+userID+'&action='+action+'&comment='+comment+'&label='+label+'&url='+window.location.href));
    }

    // label == what it is
    function logClick(label, comment) {
        var action = 'click';
        log(action, label, comment);
    }

    // capture page load
    log('Page View', pageTitle, 'Loaded');


    /////////////////
    /// Comments ///
    ////////////////

    $("#submit-comment").click(function(event) {
      var commenter_name = $("#commenter-name").val();
      var new_comment = $("#commenter-comment").val();
      var url = pageTitle;
      var label = userID;

      if (commenter_name.length > 0 && new_comment.length > 0 ) {
        submitComment(commenter_name, new_comment, label);
        // send to google
        ga('send', 'event','Comments', 'Add Comment', label);


      } else {
        submitCommentError();
        // var commenter_position = ".support";
        // send to google
        ga('send','event','Comments', 'Add Comment Error', label);

      }

      // var commenter_position = ".support";
      event.preventDefault();
    });


    function submitComment(name, comment, identifier, url) {
      $(".new-comment").replaceWith('<div class="alert alert-success">Thanks for your comment!</div>');

      log('Comment', 'Add Comment', name+ ': '+comment);
    }

    function submitCommentError() {
      $('.alert-error').remove();
      $(".new-comment").append("<div class='alert alert-error'>* Please enter your name and a comment.</div>");
      log('Comment', 'Add Comment', 'Add Comment Error');
    }


    /////////////////
    /// Feedback ///
    ////////////////

    $("#submit-feedback").click(function(event) {
      event.preventDefault();

      var name = $("#feedback-name").val();
      var feedback = $("#feedback-comment").val();

      if (name.length > 0 && feedback.length > 0 ) {
        submitFeedback(name, feedback);
      } else {
        submitFeedbackError();
      }
    });


    function submitFeedback(name, feedback) {
      $(".feedback").replaceWith('<div class="alert alert-success">Thanks for your feedback!</div>');

      log('Feedback', 'Add Feedback', name+ ': '+feedback);

    }

    function submitFeedbackError() {
      $('.alert-error').remove();
      $(".feedback").append("<div class='alert alert-error'>* Please enter your name and feedback.</div>");
      log('Feedback', 'Add Feedback', 'Add Feedback Error');
    }


    /////////////////////////
    /// Report Error Form ///
    /////////////////////////

    $("#submit-error").click(function(event) {
      event.preventDefault();

      var errorComment = $("#report-error-comment").val();

      if (errorComment.length > 0 ) {
        submitReportError(errorComment);
      } else {
        submitReportErrorError();
      }
    });


    function submitReportError(errorComment) {
      $(".report-error").replaceWith('<div class="alert alert-success">Thanks for reporting an error!</div>');

      log('Report Error', 'Add Report Error', errorComment);

    }

    function submitReportErrorError() {
      $('.alert-error').remove();
      $(".report-error").append("<div class='alert alert-error'>* Please enter your error to report.</div>");
      log('Report Error', 'Add Report Error', 'Add Report Error Error');
    }

});

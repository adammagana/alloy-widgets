// Collect the passed arguments
var args = arguments[0] || {};

// Set any passed success message
$.title.text = args.title || 'Confirmed!';
$.message.text = args.message || '';



// Helper functions for setting the title and message text
exports.setTitle = function (title) {
    $.title.text = title || 'Confirmed!';
};

exports.setMessage = function (message) {
    $.message.text = message || '';
};



// Open and show the success message
exports.show = function () {
    $.container.open();
    $.container.opacity = 0.8;
};

// Close and hide the success message
exports.hide = function () {
    $.container.close();
    $.container.opacity = 0;
};



// Fade in the success message
// Allow for a custom duration
exports.fadeIn = function (duration) {
    $.container.open();

    var fadeIn = Ti.UI.createAnimation({
        duration: duration || 200,
        opacity: 0.8
    });
    $.container.animate(fadeIn);
};

// Fade out the success message
// Allow for a custom duration
exports.fadeOut = function (duration) {
    var fadeOut = Ti.UI.createAnimation({
        duration: duration || 200,
        opacity: 0
    });
    $.container.animate(fadeOut);

    fadeOut.addEventListener('complete', function () {
        $.container.close();
    });
};



var self = this;
// Bind a click event listener to the main container
// This allows the user to dismiss the success message
// by touching it.
$.container.addEventListener('click', function () {
    self.fadeOut();
});
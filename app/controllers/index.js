// Confirmation message button/demo
$.confirmationButton.addEventListener('click', function () {
    // Create the confirmation message widget with
    // custom options.
    var confirmationMessage = Alloy.createWidget('confirmationMessage', {
        title: 'Success!',
        message: 'You created a confirmation message!'
    });

    // Fade in the confirmation message with an animation
    // duration of 300ms.
    confirmationMessage.fadeIn(300);

    // Set a timeout to automatically fade out the message
    setTimeout(function () {
        confirmationMessage.fadeOut(300);
    }, 2300);
});

$.mainWindow.open();
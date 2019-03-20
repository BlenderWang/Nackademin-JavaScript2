$(document).ready(function() {
    $('#inputUsername').focusout(function() {
        const inputUsernameLength = $('#inputUsername').val().length;
        (inputUsernameLength < 5 || inputUsernameLength > 20) ? $('#err-msg1').show() : $('#err-msg1').hide();
    });
    $('#inputPassword').focusout(() => {
        const passwordLength = $('#inputPassword').val().length;
        (passwordLength < 5) ? $('#err-msg2').show() : $('#err-msg2').hide();
    });
});
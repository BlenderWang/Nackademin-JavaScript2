$(document).ready(() => {
    $('#username').on('input', () => {
        const username = $('#username').val();

        function msg(body) {
            $('.err-username').text(body).show();
        }

        function hide() {
            $('.err-username').hide();
        };

        if(username.length < 3 || username.length > 10) {
            msg('Must be at least 3 characters but no more than 10');
        } else {
            hide();
            const testExp = new RegExp(/^[a-zA-Z0-9]+$/);
            (!testExp.test(username)) ? msg('Must not have any special characters') : hide();
        }
    });
});
$(document).ready(() => {
    $('.form-signin').on('submit', (e) => {
        alert('form submitted');
        // e.preventDefault();
    });

    const formValid = {
        username: false,
        password: false
    };

    function checkValidation() {
        if(formValid.username && formValid.password) {
            $('#submit').removeAttr('disabled');
        }else {
            $('#submit').attr('disabled', true);
        }
    }

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
            formValid.username = false;
            checkValidation();
        } else {
            hide();
            formValid.username = true;
            checkValidation();

            const testExp = new RegExp(/^[a-zA-Z0-9]+$/);
            if(!testExp.test(username)) {
                msg('Must not have any special characters');
                formValid.username = false;
                checkValidation();
            } else {
                hide();
                formValid.username = true;
                checkValidation();
            }
        }
    });

    $('#inputPassword').on('input', () => {
        const password = $('#inputPassword').val();

        function msg(body) {
            $('.err-password').text(body).show();
        }

        function hide() {
            $('.err-password').hide();
        };

        if(password.length < 3 || password.length > 20) {
            msg('Must be at least 3 characters but no more than 10');
            formValid.password = false;
            checkValidation();
        } else {
            hide();
            formValid.password = true;
            checkValidation();

            const testExp = new RegExp(/^(?=.*\d)(?=.*[a-z])[0-9a-z]{3,}$/);  // at least 3 characters where at least 1 of them is a number
            if(!testExp.test(password)) {
                msg('Must contain letters and at least 1 number');
                formValid.password = false;
                checkValidation();
            } else {
                hide();
                formValid.password = true;
                checkValidation();
            }
        }
    });
});
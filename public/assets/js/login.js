$(document).ready(function(){

    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');

    $('#btn-login').on('click', (evt) => {
        console.log('click');
        evt.preventDefault();
        let data = {
            email: $('#login-email').val(),
            password: $('#login-password').val(),
        }
        loginApi(data);

    });

    function loginApi(data) {
            console.log(data);
        fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-Token": $('input[name="_token"]').val()
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then(function (myJson) {
                // sessionStorage.setItem('session', JSON.stringify(myJson.login));
                localStorage.setItem('session', JSON.stringify(myJson.login));
                console.log(myJson);
                window.location.href = '/material';
            })
            .catch(function (response) {
                console.log('respuesta error', response)

            });

    }
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }

});

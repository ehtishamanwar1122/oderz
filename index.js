
    const loginButton = document.querySelector('#login');
    const createAccountButton = document.querySelector('#create');

    loginButton.addEventListener('click', function() {
        window.location.href = 'signup/login.html'; 
    });

    createAccountButton.addEventListener('click', function() {
        window.location.href = './signup/signup.html';
    });

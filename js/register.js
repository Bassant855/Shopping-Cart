let username = document.getElementById('username');
let email = document.getElementById('email')
let password = document.getElementById('password');
let signUpBtn = document.getElementById('singup')

signUpBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if(username.value === "" || email.value === "" || password.value === "") {
        alert('Please Fill The Data')
    } else {
        
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value)
        setTimeout(() => {
            window.location = "login.html";
        }, 1500);
    }

    clearData();
});

function clearData() {
    username.value = '';
    email.value = '';
    password.value = '';
}
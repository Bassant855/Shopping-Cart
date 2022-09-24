let username = document.getElementById('username');
let password = document.getElementById('password');
let logInBtn = document.getElementById('login');

logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(username.value === '' || password.value === '') {
        alert('Please Fill The Data')
    } else{
        if(username.value === localStorage.getItem('username') 
        && password.value === localStorage.getItem('password')) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
        
        } else {
            console.log('your username and password does not match')
        }
    }
    clearData();
})

function clearData() {
    username.value = '';
    password.value = '';
}

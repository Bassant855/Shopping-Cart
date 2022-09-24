// check if user have an account or not
let userInfo = document.getElementById('userInfo');
let user = document.getElementById('user');
let links = document.getElementById('links');
let logoutBtn = document.getElementById('logout');

let username = localStorage.getItem('username')
if(username) {
    links.remove();
    userInfo.style.display = 'flex';
    user.innerHTML = username;
}

logoutBtn.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1500);
})

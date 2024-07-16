const users = {
    "user1": "password1",
    "user2": "password2",
};

const adminUsers = {
    "admin": "adminpass"
};

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (users[username] && users[username] === password) {
        window.location.href = 'centres.html';
    } else {
        document.getElementById('login-error').textContent = 'Invalid credentials';
    }
});

document.getElementById('admin-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (adminUsers[username] && adminUsers[username] === password) {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('admin-login-error').textContent = 'Invalid credentials';
    }
});

const centres = ["centre1.html", "centre2.html"];
const centreList = document.getElementById('centre-list');
if (centreList) {
    centres.forEach(centre => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `centres/${centre}`;
        link.textContent = centre;
        listItem.appendChild(link);
        centreList.appendChild(listItem);
    });
}
